import { cn } from "@/app/lib/util";
import React from "react";

function StaticModeSwiper() {
  return (
    <div className="flex gap-12 pr-[58%] select-none">
      <SwiperOption label="Camera" />
      <SwiperOption label="Templates" />
      <SwiperOption label="LIVE" selected />
    </div>
  );
}

function SwiperOption({ label, selected = false }: { label: string; selected?: boolean }) {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "max-w-16 flex flex-col items-center gap-1 text-[17px]",
          selected ? "font-bold text-neutral-50" : "font-semibold text-neutral-50/30"
        )}
      >
        {label}

        {selected && <div className="w-3/4 h-[3px] bg-neutral-50"></div>}
      </div>
    </div>
  );
}

export default StaticModeSwiper;
