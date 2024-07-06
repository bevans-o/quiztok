import { cn } from "@/app/lib/util";
import React from "react";
import StreamDetails from "../ui/StreamDetails";
import { Activity } from "@/app/lib/activity";

function PreLiveHeader({
  className,
  activity,
  onClick = () => {},
}: {
  className?: string;
  activity?: Activity;
  onClick?: () => void;
}) {
  return (
    <div
      className={cn(
        "w-full bg-gradient-to-b from-neutral-950 to-neutral-950/0 pt-12 pb-24 flex flex-col justify-center items-center gap-8",
        className
      )}
    >
      <div className="w-full flex justify-between px-4 opacity-80">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <mask id="mask0_19_396" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_19_396)">
              <path
                d="M9.99996 18.3334C8.01385 18.3334 6.2569 17.7084 4.72913 16.4584C3.20135 15.2084 2.23607 13.6111 1.83329 11.6667H3.54163C3.93052 13.1389 4.72218 14.3403 5.91663 15.2709C7.11107 16.2014 8.47218 16.6667 9.99996 16.6667C11.1944 16.6667 12.3055 16.3715 13.3333 15.7813C14.3611 15.191 15.1666 14.375 15.75 13.3334H13.3333V11.6667H18.3333V16.6667H16.6666V15C15.875 16.0556 14.8958 16.875 13.7291 17.4584C12.5625 18.0417 11.3194 18.3334 9.99996 18.3334ZM9.99996 12.5C9.30552 12.5 8.71524 12.257 8.22913 11.7709C7.74302 11.2847 7.49996 10.6945 7.49996 10C7.49996 9.30558 7.74302 8.7153 8.22913 8.22919C8.71524 7.74308 9.30552 7.50002 9.99996 7.50002C10.6944 7.50002 11.2847 7.74308 11.7708 8.22919C12.2569 8.7153 12.5 9.30558 12.5 10C12.5 10.6945 12.2569 11.2847 11.7708 11.7709C11.2847 12.257 10.6944 12.5 9.99996 12.5ZM1.66663 8.33335V3.33335H3.33329V5.00002C4.12496 3.94446 5.10413 3.12502 6.27079 2.54169C7.43746 1.95835 8.68052 1.66669 9.99996 1.66669C11.9861 1.66669 13.743 2.29169 15.2708 3.54169C16.7986 4.79169 17.7638 6.38891 18.1666 8.33335H16.4583C16.0694 6.86113 15.2777 5.65974 14.0833 4.72919C12.8888 3.79863 11.5277 3.33335 9.99996 3.33335C8.80552 3.33335 7.6944 3.62849 6.66663 4.21877C5.63885 4.80905 4.83329 5.62502 4.24996 6.66669H6.66663V8.33335H1.66663Z"
                fill="white"
              />
            </g>
          </svg>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M1 1.5L16 16.5M16 1.5L0.999968 16.5" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      <StreamDetails streamTitle="Jimbo's Tuesday Trivia Frenzy!!!" activity={activity} onClick={onClick} />
    </div>
  );
}

export default PreLiveHeader;
