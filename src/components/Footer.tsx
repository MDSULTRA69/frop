import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--border-color)] py-12 mt-auto text-[var(--text-dim)]">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="22" r="14" fill="var(--bg)" stroke="var(--gold)" strokeWidth="2"/>
              <ellipse cx="20" cy="10" rx="16" ry="5" fill="none" stroke="var(--gold)" strokeWidth="2.5"/>
              <circle cx="14" cy="20" r="2.5" fill="var(--gold)"/>
              <circle cx="26" cy="20" r="2.5" fill="var(--gold)"/>
              <path d="M14 27 Q20 31 26 27" stroke="var(--gold)" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="font-serif font-bold text-lg text-[var(--text)] tracking-wider">
              ONE PIECE DAILY
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            A daily puzzle game for die-hard fans of the Grand Line. Guess the word, earn XP, and climb the ranks to become Pirate King.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-[var(--text)] tracking-wider uppercase text-sm">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link href="/play" className="hover:text-[var(--gold)] transition-colors">Play Game</Link></li>
            <li><Link href="/leaderboard" className="hover:text-[var(--gold)] transition-colors">Leaderboard</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-[var(--text)] tracking-wider uppercase text-sm">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-[var(--gold)] transition-colors">Login</Link></li>
            <li><Link href="/register" className="hover:text-[var(--gold)] transition-colors">Register</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-[var(--border-color)]/50 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} One Piece Daily. Not affiliated with Eiichiro Oda or Shueisha.</p>
        <p className="italic">"Wealth, fame, power..."</p>
      </div>
    </footer>
  );
}
