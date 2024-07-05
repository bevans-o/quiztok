import { cn } from "@/app/lib/util";
import React from "react";

function LiveFooter({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-t from-neutral-950 to-neutral-950/0 flex flex-col gap-8 items-center pb-12 pt-32",
        className
      )}
    >
      LiveFooter
    </div>
  );
}

export default LiveFooter;
