import { Activity, getActivityTypeString } from "@/app/lib/activity";
import React from "react";
import Subheading from "./typography/Subheading";
import Detail from "./typography/Detail";
import { cn } from "@/app/lib/util";

function ActivityDetails({ activity, selected = false }: { activity: Activity; selected?: boolean }) {
  return (
    <div
      className={cn(
        "border rounded flex justify-between p-2 cursor-pointer hover:bg-neutral-100 transition-colors",
        selected ? "border-rose-500" : "border-neutral-200 "
      )}
    >
      <div className="flex flex-col justify-between gap-1">
        <div className="max-w-48">
          <Subheading>{activity.name}</Subheading>
        </div>
        <Detail>
          {getActivityTypeString(activity.type)} | {activity.sections.length} questions
        </Detail>
      </div>
      <div className="flex flex-col justify-between gap-1 text-right">
        <Detail>{activity.author}</Detail>
        <Detail>{activity.date.toLocaleDateString()}</Detail>
      </div>
    </div>
  );
}

export default ActivityDetails;
