import { useGetLeaderboard } from "@/lib/api-client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const { data, isLoading, error } = useGetLeaderboard();

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[var(--bg)] font-sans">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        <div className="flex items-center justify-center sm:justify-start gap-4 mb-12">
          <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center border border-[var(--gold)]/30">
            <Trophy className="w-6 h-6 text-[var(--gold)]" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight">Global Leaderboard</h1>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--gold)]"></div>
            <div className="text-[var(--text-dim)] uppercase tracking-widest text-sm">Fetching bounties...</div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-[var(--destructive)] border border-[var(--destructive)]/30 bg-[var(--destructive)]/10 rounded-lg">Failed to load leaderboard</div>
        ) : data?.entries?.length === 0 ? (
          <div className="text-center py-20 text-[var(--text-dim)] border border-[var(--border-color)] border-dashed rounded-lg">No players yet. Be the first to claim a bounty!</div>
        ) : (
          <div className="bg-[var(--bg2)] rounded-xl border border-[var(--border-color)] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--bg)]/50 text-[var(--text-dim)] text-xs uppercase tracking-widest border-b border-[var(--border-color)]">
                    <th className="p-5 font-bold w-20 text-center">Rank</th>
                    <th className="p-5 font-bold">Pirate</th>
                    <th className="p-5 font-bold text-right">XP</th>
                    <th className="p-5 font-bold text-right hidden sm:table-cell">Wins</th>
                    <th className="p-5 font-bold text-right hidden sm:table-cell">Streak</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-color)]">
                  {data?.entries.map((entry) => (
                    <tr key={entry.userId} className="hover:bg-[var(--bg)]/30 transition-colors group">
                      <td className="p-5 text-center font-bold text-lg">
                        {entry.rank === 1 ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--gold)] text-[var(--bg)] shadow-[0_0_10px_var(--gold)]">1</span>
                        ) : entry.rank === 2 ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-[var(--bg)]">2</span>
                        ) : entry.rank === 3 ? (
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-[var(--bg)]">3</span>
                        ) : (
                          <span className="text-[var(--text-dim)] group-hover:text-[var(--text)] transition-colors">{entry.rank}</span>
                        )}
                      </td>
                      <td className="p-5">
                        <div className="font-bold text-[var(--text)] text-lg">{entry.username}</div>
                        <div className="text-xs text-[var(--gold)] tracking-wider uppercase mt-1">{entry.rankTitle} (Lvl {entry.level})</div>
                      </td>
                      <td className="p-5 text-right font-mono text-[var(--green)] font-bold text-lg">{entry.xp.toLocaleString()}</td>
                      <td className="p-5 text-right text-[var(--text-dim)] hidden sm:table-cell font-mono">{entry.totalWins} / {entry.totalGames}</td>
                      <td className="p-5 text-right text-[var(--text-dim)] hidden sm:table-cell font-mono">
                        {entry.currentStreak > 0 ? (
                          <span className="text-orange-400">{entry.currentStreak} 🔥</span>
                        ) : (
                          <span className="opacity-50">0</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
