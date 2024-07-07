"use client";

import Badge from "@/app/components/ui/Badge";
import PageHeader from "@/app/components/ui/PageHeader";
import Heading from "@/app/components/ui/typography/Heading";
import { Badge as BadgeType } from "@/app/lib/badge";
import { getUserBadges } from "@/app/lib/badge-owner";
import React, { useEffect, useState } from "react";

function Page({ params }: { params: { user: string } }) {
  const [badges, setBadges] = useState<BadgeType[]>([]);

  useEffect(() => {
    getUserBadges(params.user).then((res) => {
      setBadges(res);
    });
  }, [setBadges]);

  return (
    <div className="w-full h-full bg-white flex flex-col text-neutral-800">
      <PageHeader title={params.user} />

      <div className="grow w-full min-h-0 flex flex-col p-6 items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow">
          <img src="/background.png" className="w-full h-full object-cover" />
        </div>
        <div className="pt-4">
          <Heading>
            <span className="text-3xl">@{params.user}</span>
          </Heading>
        </div>

        <div className="flex justify-evenly py-8 w-full">
          <div className="flex flex-col justify-center text-center">
            <div className="font-bold text-xl">204</div>
            <div className="text-sm text-neutral-700">Following</div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="font-bold text-xl">1.5B</div>
            <div className="text-sm text-neutral-700">Followers</div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="font-bold text-xl">24.1B</div>
            <div className="text-sm text-neutral-700">Likes</div>
          </div>
        </div>

        {badges.length > 0 && (
          <div className="w-full flex flex-col gap-1">
            <Heading>Badges</Heading>
            <div className="w-full flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <Badge {...badge} key={i} size="large" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
