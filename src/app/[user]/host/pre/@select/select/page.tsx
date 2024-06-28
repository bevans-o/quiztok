import ModalWindow from "@/app/components/layout/ModalWindow";
import ActivityDetails from "@/app/components/ui/ActivityDetails";
import Heading from "@/app/components/ui/typography/Heading";
import { getActivities } from "@/app/lib/activity";
import React from "react";

function Page({ params }: { params: { user: string } }) {
  const activities = getActivities(params.user);

  console.log(params.user);

  return (
    <ModalWindow>
      <div className="w-full flex flex-col justify-between gap-4 min-h-80 pb-1">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <Heading>Select an Activity</Heading>
            <button className="bg-neutral-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-neutral-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z" fill="#EC4899" />
              </svg>
            </button>
          </div>

          <div>
            {activities.map((activity, i) => (
              <ActivityDetails activity={activity} key={i} />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a className="text-rose-500 text-xs font-medium">Browse community activities →</a>
        </div>
      </div>
    </ModalWindow>
  );
}

export default Page;
