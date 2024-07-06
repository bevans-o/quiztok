"use client";

import ActivityModal from "@/app/components/layout/ActivityModal";
import PreLiveFooter from "@/app/components/layout/PreLiveFooter";
import PreLiveHeader from "@/app/components/layout/PreLiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import { Activity } from "@/app/lib/activity";
import React, { useState } from "react";

function Page({ params }: { params: { user: string } }) {
  const [activity, setActivity] = useState<Activity | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <StreamView>
      <PreLiveHeader className="absolute top-0" activity={activity} />
      <PreLiveFooter className="absolute bottom-0" onSelectActivities={() => setModalOpen(true)} />

      {modalOpen && (
        <ActivityModal
          user={params.user}
          onSelect={(a) => {
            setActivity(a);
            setModalOpen(false);
          }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </StreamView>
  );
}

export default Page;
