import { Badge as BadgeType } from "@/app/lib/badge";
import React from "react";
import Badge from "../Badge";

function Message({
  image,
  name,
  badge,
  score,
  message,
}: {
  image: string;
  name: string;
  badge?: BadgeType;
  score?: number;
  message: string;
}) {
  return (
    <div className="flex gap-2 text-white">
      <div className="w-6 h-6 rounded-full overflow-hidden border border-white">
        <img src={image} className=" object-cover -translate-y-4" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-2">
          <span className="text-sm">{name}</span>
          {badge && <Badge {...badge} size={"small"} />}
          <div className="px-1 py-[1px] text-xs bg-neutral-700/80 rounded-md">{score}</div>
        </div>

        <div className="text-xs text-white/60">{message}</div>
      </div>
    </div>
  );
}

export default Message;
