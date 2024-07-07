"use client";

import Badge from "@/app/components/ui/Badge";
import PageHeader from "@/app/components/ui/PageHeader";
import React, { useState } from "react";
import { Badge as BadgeType, Colour, postBadge } from "@/app/lib/badge";
import { cn } from "@/app/lib/util";
import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { user: string } }) {
  const router = useRouter();

  const [badge, setBadge] = useState<BadgeType>({
    name: "",
    icon: "heart",
    colour: "red",
    condition: "Top Scorer",
    author: params.user,
    id: "",
  });
  const colours = ["red", "rose", "blue", "green", "yellow", "teal", "purple"];

  return (
    <div className="w-full h-full bg-white flex flex-col ">
      <PageHeader title="New badge" />

      <div className="grow w-full min-h-0 flex flex-col">
        <div className="w-full h-40 bg-neutral-200 border-b border-neutral-300 flex justify-center items-center">
          <Badge {...badge} size="large" />
        </div>

        <div className="grow w-full p-6 flex flex-col gap-4">
          <input
            value={badge.name}
            placeholder="Badge name"
            onChange={(e) => setBadge({ ...badge, name: e.target.value })}
            className="h-8 outline-none w-full py-2 px-3 border border-neutral-200 rounded-full text-sm"
          />
          <div className="flex gap-2 justify-between">
            <button
              className={cn(
                "grow h-20 bg-neutral-100 border border-neutral-200 rounded-md flex justify-center items-center",
                badge.icon === "flower" ? "text-rose-500" : "text-neutral-400"
              )}
              onClick={() => setBadge({ ...badge, icon: "flower" })}
            >
              <div className="w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="M480-560.08q36.92 0 62.42-25.5t25.5-62.42q0-36.92-25.5-62.42T480-735.92q-36.92 0-62.42 25.5T392.08-648q0 36.92 25.5 62.42t62.42 25.5Zm0 148q-37.15 0-62.38-26.96-25.23-26.96-20.93-66.42-11 8.15-24.46 11.65t-26.84 3.5q-33.47 0-56.16-23-22.69-23-22.69-56.46 0-24.46 13.19-45.42 13.2-20.96 35.04-32.81-22.23-11.85-35.23-32.81-13-20.96-13-45.42 0-33.46 22.69-56.46t56.16-23q13.38 0 26.84 4 13.46 4 24.85 11.77-3.31-39.08 21.23-66.54 24.54-27.46 61.69-27.46t61.69 27.46q24.54 27.46 21.23 66.54 11.39-7.77 24.85-11.77t26.84-4q33.47 0 56.66 23 23.19 23 23.19 56.46 0 24.46-13.19 45.61-13.2 21.16-35.04 32.62 22.23 12.85 35.23 33.31 13 20.46 13 44.92 0 33.46-23.19 56.46t-56.66 23q-13.38 0-26.84-4-13.46-4-25.23-11.15 4.69 39.46-20.35 66.42-25.04 26.96-62.19 26.96Zm0 293q0-60.15 24.96-115.69t67-97.58q42.04-42.03 97.08-67 55.04-24.96 116.19-24.96 0 61.16-24.96 116.19-24.96 55.04-67 97.08t-97.58 67Q540.15-119.08 480-119.08Zm0 0q0-60.15-24.96-115.69t-67-97.58q-42.04-42.03-97.58-67-55.54-24.96-115.69-24.96 0 61.16 24.96 116.19 24.96 55.04 67 97.08t97.08 67q55.04 24.96 116.19 24.96Z" />
                </svg>
              </div>
            </button>
            <button
              className={cn(
                "grow h-20 bg-neutral-100 border border-neutral-200 rounded-md flex justify-center items-center",
                badge.icon === "heart" ? "text-rose-500" : "text-neutral-400"
              )}
              onClick={() => setBadge({ ...badge, icon: "heart" })}
            >
              <div className="w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="m480-170.93-36.15-32.69q-98.46-88.23-162.5-150.57-64.04-62.35-100.58-109.93-36.54-47.57-50.65-86.27Q116-589.08 116-629q0-80.15 55.42-135.58Q226.85-820 307-820q49.38 0 95 23.5t78 67.27q32.38-43.77 78-67.27 45.62-23.5 95-23.5 80.15 0 135.58 55.42Q844-709.15 844-629q0 39.92-13.62 77.61-13.61 37.7-50.15 84.77-36.54 47.08-100.89 110.43Q615-292.85 514.15-201.62L480-170.93Z" />
                </svg>
              </div>
            </button>
            <button
              className={cn(
                "grow h-20 bg-neutral-100 border border-neutral-200 rounded-md flex justify-center items-center",
                badge.icon === "star" ? "text-rose-500" : "text-neutral-400"
              )}
              onClick={() => setBadge({ ...badge, icon: "star" })}
            >
              <div className="w-12 h-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                  <path d="m273-185.54 55.31-231.77-183.46-155.92 240.61-20.92L480-812.84l94.54 219.69 240.61 19.92-183.46 155.92L687-185.54 480-308.46 273-185.54Z" />
                </svg>
              </div>
            </button>
          </div>

          <div className="flex gap-2 flex-wrap justify-center py-4">
            {colours.map((colour) => (
              <button
                key={colour}
                onClick={() => setBadge({ ...badge, colour: colour as Colour })}
                className={`w-16 h-10 bg-${colour}-600 border-2 border-white/20 rounded-lg`}
              />
            ))}
          </div>
        </div>

        <div className="w-full pt-4 pb-8 px-6 border-t-2 border-neutral-200 bg-white z-10">
          <Button
            size={"full"}
            onClick={async () => {
              await postBadge(badge);
              router.push(`/${params.user}/host/pre?modal=true`);
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;
