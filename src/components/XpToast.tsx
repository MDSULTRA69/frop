import { motion, AnimatePresence } from "framer-motion";

interface XpToastProps {
  show: boolean;
  xpEarned: number;
  leveledUp: boolean;
  oldRank: string;
  newRank: string;
}

export function XpToast({ show, xpEarned, leveledUp, oldRank, newRank }: XpToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[var(--bg2)] border border-[var(--gold)] rounded-lg shadow-2xl p-4 min-w-[300px] text-center"
        >
          <div className="text-[var(--green)] font-bold text-xl mb-1">+{xpEarned} XP</div>
          {leveledUp && (
            <div className="text-[var(--text)]">
              <div className="text-sm font-bold text-[var(--gold)] uppercase tracking-wider mb-1">Rank Up!</div>
              <div className="text-sm text-[var(--text-dim)] flex items-center justify-center gap-2">
                <span className="line-through">{oldRank}</span>
                <span>→</span>
                <span className="text-[var(--gold)] font-bold">{newRank}</span>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
