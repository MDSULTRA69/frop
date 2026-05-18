import { useEffect } from "react";
import { TileColor } from "./Tile";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const KB_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

interface KeyboardProps {
  onKey: (key: string) => void;
  keyColors: Record<string, TileColor>;
}

export function Keyboard({ onKey, keyColors }: KeyboardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey || e.repeat) return;
      if (e.key === "Enter") onKey("ENTER");
      else if (e.key === "Backspace") onKey("⌫");
      else if (/^[a-zA-Z]$/.test(e.key)) onKey(e.key.toUpperCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onKey]);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-2 mt-8 px-2">
      {KB_ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1.5">
          {row.map(key => {
            const isWide = key === "ENTER" || key === "⌫";
            const color = keyColors[key];
            
            return (
              <button
                key={key}
                onClick={() => onKey(key)}
                className={cn(
                  "h-14 rounded font-bold text-sm transition-colors duration-200 select-none",
                  isWide ? "px-3 md:px-4" : "flex-1 max-w-[40px] px-1 md:px-2",
                  {
                    "bg-[var(--bg3)] text-[var(--text)] hover:bg-opacity-80": !color,
                    "bg-[var(--green)] text-white": color === "green",
                    "bg-[var(--yellow)] text-white": color === "yellow",
                    "bg-[var(--gray)] text-[var(--text-dim)]": color === "gray",
                  }
                )}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
