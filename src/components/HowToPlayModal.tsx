import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tile } from "./Tile";

interface HowToPlayModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HowToPlayModal({ open, onOpenChange }: HowToPlayModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[var(--bg2)] border-[var(--border-color)] text-[var(--text)] font-sans max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">How To Play</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-[var(--text-dim)]">
            Guess the hidden <strong className="text-[var(--text)]">One Piece</strong> term in <strong className="text-[var(--text)]">6 tries</strong>. The word is between <strong className="text-[var(--text)]">5 and 6 letters</strong> and changes every day.
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-[var(--text-dim)]">
            <li>Type any letters — no word-list restriction on guesses</li>
            <li>The color of the tiles changes after each guess</li>
            <li>A subtle hint is shown above the board throughout the game</li>
          </ul>

          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <div className="flex gap-1">
                <Tile letter="L" color="green" />
                <Tile letter="U" color={null} isCompleted />
                <Tile letter="F" color={null} isCompleted />
                <Tile letter="F" color={null} isCompleted />
                <Tile letter="Y" color={null} isCompleted />
              </div>
              <p className="text-sm text-[var(--text-dim)]">
                <strong className="text-[var(--text)]">L</strong> is in the correct spot.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-1">
                <Tile letter="S" color={null} isCompleted />
                <Tile letter="A" color="yellow" />
                <Tile letter="N" color={null} isCompleted />
                <Tile letter="J" color={null} isCompleted />
                <Tile letter="I" color={null} isCompleted />
              </div>
              <p className="text-sm text-[var(--text-dim)]">
                <strong className="text-[var(--text)]">A</strong> is in the word but wrong spot.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex gap-1">
                <Tile letter="B" color={null} isCompleted />
                <Tile letter="R" color={null} isCompleted />
                <Tile letter="O" color="gray" />
                <Tile letter="O" color={null} isCompleted />
                <Tile letter="K" color={null} isCompleted />
              </div>
              <p className="text-sm text-[var(--text-dim)]">
                <strong className="text-[var(--text)]">O</strong> is not in the word at all.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
