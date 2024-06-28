import { Activity } from "@/app/lib/activity";
import React from "react";

function ActivityDetails({ activity }: { activity: Activity }) {
  return <div>{activity.name}</div>;
}

export default ActivityDetails;
