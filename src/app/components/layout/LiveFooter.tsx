import { cn } from "@/app/lib/util";
import React, { ReactNode } from "react";

function LiveFooter({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-t from-neutral-950 to-neutral-950/0 flex flex-col gap-4 items-center pb-6 pt-32",
        className
      )}
    >
      {children}
    </div>
  );
}

export default LiveFooter;
