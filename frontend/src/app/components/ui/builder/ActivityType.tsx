"use client";

import { cn } from "@/app/lib/util";
import React, { ReactNode } from "react";

function ActivityType({
  title,
  description,
  icon,
  disabled = false,
  onClick = () => {},
}: {
  title?: string;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn(
        "group relative w-full p-4 pb-6 rounded-lg border border-neutral-200 overflow-hidden ",
        disabled ? "opacity-50" : "hover:border-rose-400 transition-colors cursor-pointer hover:bg-neutral-100"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex flex-col gap-2 relative z-10 text-left">
        <h2 className="text-lg font-bold text-neutral-800 group-hover:text-rose-600 transition-colors">{title}</h2>

        <p className="text-sm font-light text-neutral-600">{description}</p>
      </div>
      <div className="absolute w-32 h-32 text-neutral-200 bottom-0 right-0 translate-x-8 translate-y-0">{icon}</div>
    </button>
  );
}

export default ActivityType;
