import { Activity, getActivityTypeString } from "@/app/lib/activity";
import React from "react";
import Subheading from "./typography/Subheading";
import Detail from "./typography/Detail";

function ActivityDetails({ activity }: { activity: Activity }) {
  console.log(activity);
  return (
    <div className="border border-neutral-200 rounded flex justify-between p-2 cursor-pointer hover:bg-neutral-100 transition-colors">
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
