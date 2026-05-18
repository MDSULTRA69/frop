import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";
import { LogOut } from "lucide-react";

export function Header({ onHowToPlay, onStats }: { onHowToPlay?: () => void, onStats?: () => void }) {
  const { user, logout } = useAuth();
  const [location] = useLocation();

  const isGamePage = location === "/play";

  return (
    <header className="border-b border-[var(--border-color)] bg-[var(--bg)]/90 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <img src="/one-piece-logo.png" alt="One Piece Daily" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-semibold transition-colors ${location === "/" ? "text-[var(--gold)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"}`}>
              Home
            </Link>
            <Link href="/play" className={`text-sm font-semibold transition-colors ${location === "/play" ? "text-[var(--gold)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"}`}>
              Play
            </Link>
            <Link href="/leaderboard" className={`text-sm font-semibold transition-colors ${location === "/leaderboard" ? "text-[var(--gold)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"}`}>
              Leaderboard
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isGamePage && (
            <div className="flex items-center gap-2 mr-2 border-r border-[var(--border-color)] pr-4">
              {onStats && (
                <button onClick={onStats} className="text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors p-1" title="Statistics">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </button>
              )}
              {onHowToPlay && (
                <button onClick={onHowToPlay} className="w-6 h-6 rounded-full border-2 border-[var(--text-dim)] text-[var(--text-dim)] font-bold text-xs flex items-center justify-center hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" title="How to Play">
                  ?
                </button>
              )}
            </div>
          )}

          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col items-end">
                <div className="text-sm font-bold text-[var(--text)]">{user.username}</div>
                <div className="text-xs text-[var(--gold)]">{user.rank} • {user.xp} XP</div>
              </div>
              <button 
                onClick={() => logout()} 
                className="text-[var(--text-dim)] hover:text-[var(--destructive)] transition-colors p-1"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-semibold text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                Login
              </Link>
              <Link href="/register" className="text-sm bg-[var(--gold)] text-[var(--bg)] px-4 py-1.5 rounded font-bold hover:bg-opacity-90 transition-colors uppercase tracking-wider">
                Join
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
