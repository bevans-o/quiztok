"use client";

import Badge from "@/app/components/ui/Badge";
import PageHeader from "@/app/components/ui/PageHeader";
import React, { useState } from "react";
import { Badge as BadgeType } from "@/app/lib/badge";

function Page() {
  const [badge, setBadge] = useState<BadgeType>({ name: "", icon: "heart", colour: "red" });

  return (
    <div className="w-full h-full bg-white flex flex-col ">
      <PageHeader title="New badge" />

      <div className="grow w-full min-h-0 flex flex-col">
        <div className="w-full h-40 bg-neutral-200 border-b border-neutral-300 flex justify-center items-center">
          <Badge {...badge} size="large" />
        </div>

        <div className="grow w-full">
          <input
            value={badge.name}
            placeholder="Badge name"
            onChange={(e) => setBadge({ ...badge, name: e.target.value })}
            className="h-8 outline-none grow py-2 px-3 border border-neutral-200 rounded-full text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
