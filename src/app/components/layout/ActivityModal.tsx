import React from "react";
import ModalWindow from "./ModalWindow";
import Heading from "../ui/typography/Heading";
import { Activity, getActivities } from "@/app/lib/activity";
import Link from "next/link";
import ActivityDetails from "../ui/ActivityDetails";
import Detail from "../ui/typography/Detail";

function ActivityModal({
  user,
  onSelect = () => {},
  onClose = () => {},
}: {
  user?: string;
  onSelect?: (a: Activity | undefined) => void;
  onClose?: () => void;
}) {
  const activities = getActivities(user);

  return (
    <ModalWindow onClose={onClose}>
      <div className="w-full flex flex-col justify-between gap-4 min-h-80 pb-1 ">
        <div className="w-full h-full flex flex-col gap-4 relative">
          <div className="w-full flex justify-between items-center">
            <Heading>Select an Activity</Heading>
            <Link
              href={`/${user}/activity/build`}
              className="bg-neutral-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-neutral-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z" fill="#EC4899" />
              </svg>
            </Link>
          </div>

          <div className="overflow-y-scroll max-h-[24rem]">
            <div className="flex flex-col gap-1 ">
              <button
                onClick={() => onSelect(undefined)}
                className="border border-neutral-200 p-2 hover:bg-neutral-100 transition-colors"
              >
                <Detail>No Activity</Detail>
              </button>

              {activities.map((activity, i) => (
                <div onClick={() => onSelect(activity)}>
                  <ActivityDetails activity={activity} key={i} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-white to-white/0" />
        </div>

        <div className="flex justify-center">
          <Link href={`/${user}/activity/market`} className="text-rose-500 text-xs font-medium">
            Browse community activities →
          </Link>
        </div>
      </div>
    </ModalWindow>
  );
}

export default ActivityModal;
