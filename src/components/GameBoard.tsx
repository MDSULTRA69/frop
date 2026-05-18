import { Tile, TileColor } from "./Tile";

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  wordLength: number;
  maxGuesses: number;
  target: string;
  isRevealing: boolean;
  shakeRow: number;
}

export function computeFeedback(guess: string, target: string): TileColor[] {
  const result: TileColor[] = Array(target.length).fill("gray");
  const tLetters = target.split("");
  const gLetters = guess.split("");
  
  gLetters.forEach((l, i) => {
    if (l === tLetters[i]) {
      result[i] = "green";
      tLetters[i] = "";
      gLetters[i] = "";
    }
  });
  
  gLetters.forEach((l, i) => {
    if (!l) return;
    const idx = tLetters.indexOf(l);
    if (idx !== -1) {
      result[i] = "yellow";
      tLetters[idx] = "";
    }
  });
  
  return result;
}

export function GameBoard({ guesses, currentGuess, wordLength, maxGuesses, target, isRevealing, shakeRow }: GameBoardProps) {
  const emptyRows = Math.max(0, maxGuesses - guesses.length - (currentGuess.length < wordLength && guesses.length < maxGuesses ? 1 : (guesses.length === maxGuesses ? 0 : 1)));

  return (
    <div className="grid gap-2 justify-center" style={{ gridTemplateColumns: `repeat(${wordLength}, var(--tile-size))` }}>
      {/* Past Guesses */}
      {guesses.map((guess, i) => {
        const feedback = computeFeedback(guess, target);
        const isJustSubmitted = isRevealing && i === guesses.length - 1;
        
        return guess.split("").map((letter, j) => (
          <Tile
            key={`guess-${i}-${j}`}
            letter={letter}
            color={isJustSubmitted ? null : feedback[j]}
            isCompleted={!isJustSubmitted}
            animate={isJustSubmitted}
            delay={j * 0.3}
          />
        ));
      })}

      {/* Current Guess */}
      {guesses.length < maxGuesses && (
        Array.from({ length: wordLength }).map((_, j) => (
          <Tile
            key={`current-${j}`}
            letter={currentGuess[j] || ""}
            color={null}
            shake={shakeRow === guesses.length}
          />
        ))
      )}

      {/* Empty Rows */}
      {Array.from({ length: emptyRows }).map((_, i) => (
        Array.from({ length: wordLength }).map((_, j) => (
          <Tile
            key={`empty-${i}-${j}`}
            letter=""
            color={null}
          />
        ))
      ))}
    </div>
  );
}
