import { Link } from "wouter";
import { useGetLeaderboard, getGetLeaderboardQueryKey } from "@/lib/api-client";
import { useAuth } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { user } = useAuth();
  const { data: leaderboardData } = useGetLeaderboard({ limit: 5 }, { 
    query: { queryKey: getGetLeaderboardQueryKey({ limit: 5 }) }
  });

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col font-sans selection:bg-[var(--gold)] selection:text-[var(--bg)]">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-4 overflow-hidden border-b border-[var(--border-color)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--bg2)_0%,_var(--bg)_100%)] opacity-50"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
            <div className="inline-block border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              The Grand Line Awaits
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--text)] tracking-tight leading-tight">
              Test Your Knowledge of the <span className="text-[var(--gold)]">New World</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-dim)] max-w-2xl mx-auto leading-relaxed">
              A daily word puzzle for the most dedicated pirates. Guess the mystery word, earn XP, and secure your bounty on the global leaderboard.
            </p>
            
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/play" 
                className="w-full sm:w-auto bg-[var(--gold)] text-[var(--bg)] px-8 py-4 rounded font-bold text-lg hover:bg-white transition-colors uppercase tracking-widest text-center"
              >
                Play Today's Puzzle
              </Link>
              {!user && (
                <Link 
                  href="/register" 
                  className="w-full sm:w-auto border border-[var(--border-color)] bg-[var(--bg2)] text-[var(--text)] px-8 py-4 rounded font-bold text-lg hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors uppercase tracking-widest text-center"
                >
                  Join the Crew
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* User Dashboard / Call to Action */}
        <section className="py-16 px-4 bg-[var(--bg2)]">
          <div className="max-w-4xl mx-auto">
            {user ? (
              <div className="bg-[var(--bg)] border border-[var(--gold)]/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="space-y-2 z-10 text-center md:text-left">
                  <h2 className="font-serif text-2xl font-bold text-[var(--text)]">Welcome back, {user.username}</h2>
                  <p className="text-[var(--text-dim)]">Current Rank: <span className="text-[var(--gold)] font-bold">{user.rank}</span></p>
                  {user.currentStreak > 0 && (
                    <p className="text-[var(--green)] font-mono text-sm mt-2">🔥 {user.currentStreak} day streak</p>
                  )}
                </div>
                <div className="z-10 flex gap-4">
                  <div className="text-center px-6 border-r border-[var(--border-color)]">
                    <div className="text-3xl font-mono font-bold text-[var(--text)]">{user.xp}</div>
                    <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-1">Total XP</div>
                  </div>
                  <div className="text-center px-6">
                    <div className="text-3xl font-mono font-bold text-[var(--text)]">{user.totalWins}</div>
                    <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-1">Victories</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border border-[var(--border-color)] rounded-xl bg-[var(--bg)] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg2)] border border-[var(--border-color)] flex items-center justify-center mx-auto text-xl">🧠</div>
                  <h3 className="font-bold text-[var(--text)] tracking-wider">One Puzzle A Day</h3>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">A new 5-7 letter word every 24 hours. Characters, places, attacks, and lore.</p>
                </div>
                <div className="p-6 border border-[var(--gold)]/30 rounded-xl bg-[var(--bg)] text-center space-y-4 shadow-lg shadow-[var(--gold)]/5">
                  <div className="w-12 h-12 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)] flex items-center justify-center mx-auto text-xl">⭐</div>
                  <h3 className="font-bold text-[var(--text)] tracking-wider">Earn XP & Level Up</h3>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">Solve puzzles faster to earn more XP. Ascend from Deckhand to Pirate King.</p>
                </div>
                <div className="p-6 border border-[var(--border-color)] rounded-xl bg-[var(--bg)] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--bg2)] border border-[var(--border-color)] flex items-center justify-center mx-auto text-xl">🏴‍☠️</div>
                  <h3 className="font-bold text-[var(--text)] tracking-wider">Compete Globally</h3>
                  <p className="text-sm text-[var(--text-dim)] leading-relaxed">See how your bounty stacks up against fans from around the world.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="py-24 px-4 border-t border-[var(--border-color)]">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text)]">Most Wanted</h2>
              <p className="text-[var(--text-dim)]">The highest bounties on the sea right now.</p>
            </div>

            <div className="bg-[var(--bg2)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-2xl">
              {leaderboardData?.entries ? (
                <div className="divide-y divide-[var(--border-color)]">
                  {leaderboardData.entries.slice(0, 5).map((entry, i) => (
                    <div key={entry.userId} className="p-4 sm:p-6 flex items-center justify-between hover:bg-[var(--bg)]/50 transition-colors">
                      <div className="flex items-center gap-4 sm:gap-6">
                        <div className={`w-8 h-8 flex items-center justify-center font-bold rounded ${
                          i === 0 ? "bg-[var(--gold)] text-[var(--bg)]" : 
                          i === 1 ? "bg-gray-300 text-[var(--bg)]" : 
                          i === 2 ? "bg-amber-600 text-[var(--bg)]" : 
                          "text-[var(--text-dim)]"
                        }`}>
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-bold text-[var(--text)] text-lg">{entry.username}</div>
                          <div className="text-xs text-[var(--gold)] tracking-wider uppercase">{entry.rankTitle}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[var(--green)] font-bold text-lg">{entry.xp.toLocaleString()}</div>
                        <div className="text-xs text-[var(--text-dim)] uppercase tracking-widest mt-1">XP</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center text-[var(--text-dim)] animate-pulse">
                  Loading wanted posters...
                </div>
              )}
              
              <div className="p-4 bg-[var(--bg)] border-t border-[var(--border-color)] text-center">
                <Link href="/leaderboard" className="text-sm font-bold text-[var(--gold)] hover:underline tracking-widest uppercase">
                  View Full Leaderboard →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
