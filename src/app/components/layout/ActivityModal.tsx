import React, { useEffect, useState } from "react";
import ModalWindow from "./ModalWindow";
import Heading from "../ui/typography/Heading";
import { Activity, getActivities } from "@/app/lib/activity";
import Link from "next/link";
import ActivityDetails from "../ui/ActivityDetails";
import Detail from "../ui/typography/Detail";
import { Badge as BadgeType, getBadges } from "@/app/lib/badge";
import Subheading from "../ui/typography/Subheading";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { cn } from "@/app/lib/util";
import ToggleBubbles from "../ui/ToggleBubbles";
import { BadgeCondition, Stream, getStreams } from "@/app/lib/stream";

function ActivityModal({
  user,
  onSelect = () => {},
  onClose = () => {},
}: {
  user?: string;
  onSelect?: (a: Activity | undefined, b: BadgeType | undefined) => void;
  onClose?: () => void;
}) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [badgeConditions, setBadgeConditions] = useState<BadgeCondition>();
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [selectedBadge, setSelectedBadge] = useState<BadgeType | undefined>(undefined);
  const [selectedBadgeCondition, setSelectedBadgeCondition] = useState<Stream | null>(null);
  const conditions = ["Top Scorer", "Top Three", "Top Five"]

  useEffect(() => {
    getActivities(user).then((res) => {
      setActivities(res);
    });

    getBadges(user).then((res) => {
      setBadges(res);
    });

  }, [setActivities, setBadges, user]);

  return (
    <ModalWindow onClose={onClose}>
      <div className="w-full flex flex-col justify-between gap-4 min-h-80 pb-1 ">
        <div className="w-full h-full flex flex-col gap-4 relative grow pb-1">
          <div className="w-full flex justify-between items-center">
            <Heading>Select an Activity</Heading>
            <Link
              href={`/${user}/activity/build/type`}
              className="bg-neutral-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-neutral-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z" fill="#EC4899" />
              </svg>
            </Link>
          </div>

          <div className="overflow-y-scroll grow max-h-[24rem]">
            <div className="flex flex-col gap-1 ">
              <button
                onClick={() => {
                  setSelectedActivity(undefined);
                  setSelectedBadge(undefined);
                }}
                className="border border-neutral-200 p-2 hover:bg-neutral-100 transition-colors rounded"
              >
                <Detail>No Activity</Detail>
              </button>

              {activities.map((activity, i) => (
                <div onClick={() => setSelectedActivity(activity)} key={i}>
                  <ActivityDetails activity={activity} selected={selectedActivity?.id === activity.id} />
                </div>
              ))}
            </div>
          </div>

          {activities.length > 4 && (
            <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-white to-white/0" />
          )}
        </div>

        {selectedActivity && (
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
            <div className="flex justify-between gap-1">
              <div className="flex flex-col">
                <Subheading>Select a badge</Subheading>
                <Detail>The activity winner receives this badge.</Detail>
              </div>

              <Link
                href={`/${user}/badge/build`}
                className="bg-neutral-200 w-6 h-6 rounded-full flex justify-center items-center hover:bg-neutral-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z" fill="#EC4899" />
                </svg>
              </Link>
            </div>

            <div className="flex gap-1 flex-wrap items-center">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedBadge(badge)}
                  className={cn(
                    "p-[2px] border-2 rounded-full cursor-pointer",
                    badge.id === selectedBadge?.id ? "border-rose-500" : "border-transparent"
                  )}
                >
                  <Badge {...badge} size="large" />
                </div>
              ))}

              {badges.length > 0 && (
                <button
                  className="flex justify-center items-center w-6 h-6 rounded-full text-neutral-400 border border-neutral-300 font-medium text-xs hover:text-neutral-500 transition-colors"
                  onClick={() => setSelectedBadge(undefined)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17 18" fill="none">
                    <path d="M1 1.5L16 16.5M16 1.5L0.999968 16.5" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </button>
              )}
            </div>
            <div className="flex gap-1 flex-wrap items-center">
            {conditions.map((badgeCondition, i) => (
                <div onClick={() => setSelectedBadgeCondition(badgeCondition)} key={i}>
                  <ToggleBubbles options={badgeConditions} selected={selectedBadgeCondition} />
                </div>
              ))}
            </div>

          </div>
        )}

        {/* <div className="flex justify-center">
          <Link href={`/${user}/activity/market`} className="text-rose-500 text-xs font-medium">
            Browse community activities →
          </Link>
        </div> */}

        <div className="w-full">
          <Button size={"full"} onClick={() => onSelect(selectedActivity, selectedBadge, selectedBadgeCondition)}>
            Save
          </Button>
        </div>
      </div>
    </ModalWindow>
  );
}

export default ActivityModal;
