import { cn } from "@/app/lib/util";
import React from "react";

function ScorePellet({
  rank,
  name,
  score,
  highlight = false,
  grow = false,
}: {
  rank: number;
  name: string;
  score: number;
  highlight?: boolean;
  grow?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 border-2 rounded-md pl-[2px] pr-1 py-[2px] text-xs justify-between",
        highlight ? "bg-orange-400/80 border-orange-400" : "bg-neutral-600/60 border-transparent",
        grow ? "grow" : ""
      )}
    >
      <div className="flex items-center gap-1">
        <div className="rounded-full bg-black/10 w-4 h-4 p-[2px] text-[10px] flex justify-center items-center">
          {rank}
        </div>
        <div>{name}</div>
      </div>
      <div className="rounded-sm bg-neutral-300/20 min-w-4 h-4 p-[2px] px-1 text-[10px] flex justify-center items-center">
        {score}
      </div>
    </div>
  );
}

export default ScorePellet;
