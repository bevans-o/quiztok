import { cn } from "@/app/lib/util";
import React from "react";

function LiveHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-b from-neutral-950 to-neutral-950/0 pt-12 pb-24 flex flex-col justify-center items-center gap-8",
        className
      )}
    >
      LiveHeader
    </div>
  );
}

export default LiveHeader;
