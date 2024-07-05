import { Activity } from "@/app/lib/activity";
import React from "react";

function StreamDetails({ streamTitle, activity }: { streamTitle?: string; activity?: Activity }) {
  return (
    <div className="flex flex-col gap-2 text-neutral-300/90 font-medium text-sm">
      <div className="bg-neutral-950/70 rounded-md w-80 p-2 flex gap-3 items-center">
        <div className="w-12 h-12 rounded border-2 border-neutral-200 overflow-hidden">
          <img className="w-full h-full object-cover" src="/background.png" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <div className="text-neutral-200 font-bold">{streamTitle}</div>
          <div className="text-xs">{activity ? activity.name : "No activity selected."}</div>
        </div>
      </div>
      <div className="flex justify-between gap-2 text-[13px]">
        <div className="bg-neutral-950/70 rounded-md flex-grow py-1 px-2">Add Topic</div>
        <div className="bg-neutral-950/70 rounded-md flex-grow py-1 px-2">Add a LIVE goal</div>
      </div>
    </div>
  );
}

export default StreamDetails;
