import { cn } from "@/app/lib/util";
import React, { ReactNode } from "react";

function LiveHeader({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-b from-neutral-950 to-neutral-950/0 pt-6 pb-24 flex flex-col justify-center items-center gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}

export default LiveHeader;
