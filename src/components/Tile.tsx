import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TileColor = "green" | "yellow" | "gray" | null;

interface TileProps {
  letter: string;
  color: TileColor;
  isCompleted?: boolean;
  delay?: number;
  animate?: boolean;
  shake?: boolean;
}

export function Tile({ letter, color, isCompleted, delay = 0, animate = false, shake = false }: TileProps) {
  const isFilled = letter.length > 0;
  
  return (
    <motion.div
      initial={false}
      animate={shake ? { x: [-5, 5, -5, 5, 0] } : animate ? { rotateX: [0, 90, 0] } : {}}
      transition={
        shake 
          ? { duration: 0.4 } 
          : animate 
            ? { duration: 0.4, delay, ease: "easeInOut" }
            : {}
      }
      className={cn(
        "flex items-center justify-center w-[var(--tile-size)] h-[var(--tile-size)] text-2xl font-bold font-serif border-2 rounded",
        "transition-colors duration-200",
        {
          "border-[var(--border-color)] bg-transparent text-[var(--text)]": !isFilled && !color,
          "border-[var(--text-dim)] bg-[var(--bg2)] text-[var(--text)]": isFilled && !color,
          "border-transparent bg-[var(--green)] text-white": color === "green",
          "border-transparent bg-[var(--yellow)] text-white": color === "yellow",
          "border-transparent bg-[var(--gray)] text-white": color === "gray",
        }
      )}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <div 
        className={cn("uppercase", {
          "opacity-0": animate && !color // During the first half of flip, hide letter if we want
        })}
      >
        {letter}
      </div>
    </motion.div>
  );
}
