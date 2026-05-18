import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface StatsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stats: {
    played: number;
    wins: number;
    streak: number;
    maxStreak: number;
    distribution: number[];
  };
  isGameOver: boolean;
  onShare: () => void;
  showShare: boolean;
}

export function StatsModal({ open, onOpenChange, stats, isGameOver, onShare, showShare }: StatsModalProps) {
  const winPct = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
  const maxDist = Math.max(...stats.distribution, 1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[var(--bg2)] border-[var(--border-color)] text-[var(--text)] font-sans max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-center">Statistics</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-4 gap-2 text-center my-6">
          <div className="flex flex-col">
            <span className="text-3xl font-bold font-serif">{stats.played}</span>
            <span className="text-xs text-[var(--text-dim)] uppercase">Played</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold font-serif">{winPct}</span>
            <span className="text-xs text-[var(--text-dim)] uppercase">Win %</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold font-serif">{stats.streak}</span>
            <span className="text-xs text-[var(--text-dim)] uppercase">Streak</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold font-serif">{stats.maxStreak}</span>
            <span className="text-xs text-[var(--text-dim)] uppercase">Best</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="font-serif font-bold text-center mb-4">Guess Distribution</h3>
          {stats.distribution.map((count, i) => {
            const pct = Math.max(8, Math.round((count / maxDist) * 100));
            // In a real app we'd highlight the current game's guess row
            const isCur = false; 
            
            return (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="w-3 text-right">{i + 1}</span>
                <div className="flex-1 h-6 bg-[var(--bg3)] rounded overflow-hidden">
                  <div 
                    className={`h-full flex items-center justify-end px-2 font-bold ${isCur ? 'bg-[var(--green)]' : 'bg-[var(--gray)]'}`}
                    style={{ width: `${pct}%` }}
                  >
                    {count}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showShare && (
          <button 
            onClick={onShare}
            className="w-full py-3 bg-[var(--green)] text-white font-bold rounded hover:bg-opacity-90 transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <span>Share Result</span>
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}
