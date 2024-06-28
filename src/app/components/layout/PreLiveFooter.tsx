import { cn } from "@/app/lib/util";
import React from "react";
import Button from "../ui/Button";
import StaticModeSwiper from "../ui/StaticModeSwiper";
import IconButton from "../ui/IconButton";
import Link from "next/link";

function PreLiveFooter({
  className,
  onSelectActivities = () => {},
}: {
  className?: string;
  onSelectActivities?: () => void;
}) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-t from-neutral-950 to-neutral-950/0 flex flex-col gap-8 items-center pb-12 pt-32",
        className
      )}
    >
      <div className="flex flex-wrap justify-center items-center max-w-[24rem] gap-x-10 gap-y-4">
        <IconButton label="Dual" icon="dual" />
        <IconButton label="Enhance" icon="enhance" />
        <button onClick={onSelectActivities}>
          <IconButton label="Activities" icon="activities" highlight />
        </button>
        <IconButton label="Effects" icon="effects" />
        <IconButton label="Settings" icon="settings" />
        <IconButton label="Share" icon="share" />
        <IconButton label="LIVE Center" icon="live" />
        <IconButton label="Business" icon="business" />
        <IconButton label="Subscription" icon="subscription" />
        <IconButton label="Promote" icon="promote" />
      </div>
      <Link href="live">
        <Button>Go LIVE</Button>
      </Link>
      <StaticModeSwiper />
    </div>
  );
}

export default PreLiveFooter;
