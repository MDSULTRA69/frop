import { useState, useEffect, useCallback, useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowToPlayModal } from "@/components/HowToPlayModal";
import { StatsModal } from "@/components/StatsModal";
import { GameBoard, computeFeedback } from "@/components/GameBoard";
import { Keyboard } from "@/components/Keyboard";
import { XpToast } from "@/components/XpToast";
import { TileColor } from "@/components/Tile";
import { getDailyWord } from "@/data/words";
import { useAuth } from "@/hooks/useAuth";
import { useSubmitGameResult } from "@/lib/api-client";
import { clsx } from "clsx";
import { Link } from "wouter";

const MAX_GUESSES = 6;

function loadLocalStats() {
  try {
    const s = JSON.parse(localStorage.getItem("opd_stats") || "");
    if (s && Array.isArray(s.distribution)) return s;
  } catch {}
  return { played: 0, wins: 0, streak: 0, maxStreak: 0, lastWinDay: -1, distribution: [0,0,0,0,0,0] };
}

function saveLocalStats(s: any) {
  localStorage.setItem("opd_stats", JSON.stringify(s));
}

export default function Game() {
  const { user } = useAuth();
  const [howToPlayOpen, setHowToPlayOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  
  const { entry: todayEntry, dayIndex } = getDailyWord();
  const targetWord = todayEntry.word;
  const wordLength = targetWord.length;

  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [shakeRow, setShakeRow] = useState(-1);
  const [msg, setMsg] = useState<{ text: string, isError: boolean } | null>(null);

  const [xpToast, setXpToast] = useState<{ show: boolean, xpEarned: number, leveledUp: boolean, oldRank: string, newRank: string } | null>(null);
  
  const submitGameResult = useSubmitGameResult();
  const resultSubmitted = useRef(false);

  // Load state on mount
  useEffect(() => {
    const stateKey = `opd_state_${dayIndex}`;
    try {
      const s = JSON.parse(localStorage.getItem(stateKey) || "");
      if (s && Array.isArray(s.guesses)) {
        setGuesses(s.guesses);
        setGameOver(s.gameOver || false);
        if (s.gameOver) {
          setTimeout(() => setStatsOpen(true), 600);
        }
      }
    } catch {}
  }, [dayIndex]);

  // Save state on change
  useEffect(() => {
    if (isRevealing) return; // Don't save mid-reveal
    const stateKey = `opd_state_${dayIndex}`;
    localStorage.setItem(stateKey, JSON.stringify({ guesses, gameOver }));
  }, [guesses, gameOver, dayIndex, isRevealing]);

  const showMessage = (text: string, isError = false, ms = 2200) => {
    setMsg({ text, isError });
    if (ms > 0) {
      setTimeout(() => setMsg(null), ms);
    }
  };

  const handleGameEnd = useCallback((won: boolean, finalGuesses: string[]) => {
    setGameOver(true);
    
    // Update local stats
    const stats = loadLocalStats();
    stats.played++;
    if (won) {
      stats.wins++;
      stats.distribution[finalGuesses.length - 1]++;
      stats.streak = (stats.lastWinDay === dayIndex - 1) ? stats.streak + 1 : 1;
      stats.maxStreak = Math.max(stats.maxStreak, stats.streak);
      stats.lastWinDay = dayIndex;
    } else {
      stats.streak = 0;
    }
    saveLocalStats(stats);

    // Submit to server if logged in
    if (user && !resultSubmitted.current) {
      resultSubmitted.current = true;
      const todayStr = new Date().toISOString().split('T')[0];
      submitGameResult.mutate({
        data: {
          puzzleDate: todayStr,
          word: targetWord,
          guesses: finalGuesses,
          won,
          guessCount: finalGuesses.length
        }
      }, {
        onSuccess: (data) => {
          if (data.xpEarned > 0) {
            setXpToast({
              show: true,
              xpEarned: data.xpEarned,
              leveledUp: data.leveledUp,
              oldRank: user.rank, // Note: not fully accurate old rank string but close enough for UI
              newRank: data.rank
            });
            setTimeout(() => setXpToast(null), 4000);
          }
        }
      });
    }

    setTimeout(() => setStatsOpen(true), 2500);
  }, [dayIndex, user, submitGameResult, targetWord]);

  const onKey = useCallback((key: string) => {
    if (gameOver || isRevealing) return;

    if (key === "⌫") {
      setCurrentGuess(prev => prev.slice(0, -1));
      return;
    }

    if (key === "ENTER") {
      if (currentGuess.length < wordLength) {
        showMessage(`Need ${wordLength} letters!`, true);
        setShakeRow(guesses.length);
        setTimeout(() => setShakeRow(-1), 400);
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      setCurrentGuess("");
      setIsRevealing(true);

      const won = currentGuess === targetWord;
      
      const totalDelay = wordLength * 300 + 300;
      setTimeout(() => {
        setIsRevealing(false);
        
        if (won) {
          const msgs = ["Incredible!","Flawless!","Outstanding!","Great job!","Not bad!","Phew!"];
          showMessage(msgs[guesses.length] || "You got it!");
          handleGameEnd(true, newGuesses);
        } else if (newGuesses.length >= MAX_GUESSES) {
          showMessage(`The word was ${targetWord}`, false, 4500);
          handleGameEnd(false, newGuesses);
        }
      }, totalDelay);

      return;
    }

    if (currentGuess.length < wordLength) {
      setCurrentGuess(prev => prev + key);
    }
  }, [currentGuess, gameOver, isRevealing, guesses, wordLength, targetWord, handleGameEnd]);

  // Compute key colors
  const keyColors: Record<string, TileColor> = {};
  const COLOR_PRIORITY = { green: 3, yellow: 2, gray: 1, null: 0 };
  
  guesses.forEach((guess, r) => {
    // Only process up to the fully revealed guesses
    if (isRevealing && r === guesses.length - 1) return;
    
    const feedback = computeFeedback(guess, targetWord);
    guess.split("").forEach((letter, i) => {
      const color = feedback[i];
      const currentColor = keyColors[letter] || null;
      // @ts-ignore
      if (COLOR_PRIORITY[color] > COLOR_PRIORITY[currentColor]) {
        keyColors[letter] = color;
      }
    });
  });

  const handleShare = () => {
    const won = guesses.some(g => g === targetWord);
    const line = won ? `${guesses.length}/${MAX_GUESSES}` : `X/${MAX_GUESSES}`;
    const grid = guesses.map(g =>
      computeFeedback(g, targetWord).map(c => c === "green" ? "🟩" : c === "yellow" ? "🟨" : "⬛").join("")
    ).join("\n");
    const text = `OnePieceDaily #${dayIndex + 1} — ${line}\n${grid}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showMessage("Copied! ⚓"));
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[var(--bg)] font-sans">
      <Header onHowToPlay={() => setHowToPlayOpen(true)} onStats={() => setStatsOpen(true)} />

      <main className="flex-1 flex flex-col items-center pt-6 pb-12 relative max-w-5xl mx-auto w-full">
        <div className="text-center mb-6 px-4 max-w-lg w-full">
          <div className="text-[var(--gold)] font-bold text-sm tracking-wider uppercase mb-1">Daily Hint</div>
          <div className="text-[var(--text)] italic font-serif text-lg leading-snug">"{todayEntry.hint}"</div>
        </div>

        {msg && (
          <div className={clsx(
            "fixed top-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded font-bold text-white shadow-lg",
            msg.isError ? "bg-[var(--destructive)]" : "bg-[var(--text)] text-[var(--bg)]"
          )}>
            {msg.text}
          </div>
        )}

        <div className="flex-1 w-full flex flex-col justify-center max-w-lg mx-auto px-4">
          <GameBoard 
            guesses={guesses}
            currentGuess={currentGuess}
            wordLength={wordLength}
            maxGuesses={MAX_GUESSES}
            target={targetWord}
            isRevealing={isRevealing}
            shakeRow={shakeRow}
          />
        </div>

        <div className="w-full max-w-lg mx-auto mt-8">
          <Keyboard onKey={onKey} keyColors={keyColors} />
        </div>

        {gameOver && !user && (
          <div className="mt-8 text-center bg-[var(--bg2)] border border-[var(--border-color)] p-4 rounded-lg max-w-sm w-full mx-4 shadow-lg">
            <p className="text-[var(--text-dim)] text-sm mb-3">Sign in to save your score and earn XP!</p>
            <div className="flex justify-center gap-4">
              <Link href="/login" className="text-[var(--gold)] font-bold hover:underline">Login</Link>
              <Link href="/register" className="text-[var(--gold)] font-bold hover:underline">Register</Link>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <HowToPlayModal open={howToPlayOpen} onOpenChange={setHowToPlayOpen} />
      <StatsModal 
        open={statsOpen} 
        onOpenChange={setStatsOpen} 
        stats={loadLocalStats()} 
        isGameOver={gameOver}
        onShare={handleShare}
        showShare={gameOver}
      />
      {xpToast && <XpToast {...xpToast} />}
    </div>
  );
}
