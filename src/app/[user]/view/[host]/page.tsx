import React from "react";

import ActivityModal from "@/app/components/layout/ActivityModal";
import PreLiveFooter from "@/app/components/layout/PreLiveFooter";
import PreLiveHeader from "@/app/components/layout/PreLiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import { postStream, Stream } from "@/app/lib/stream";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";


function Page() {
  return (<StreamView>
  <PreLiveHeader
    className="absolute top-0"
    title={`${params.user}'s Stream`}
    activity={stream.activity}
    badge={stream.badge}
    onClick={() => setModalOpen(true)}
  />
  <PreLiveFooter
    className="absolute bottom-0"
    onSelectActivities={() => setModalOpen(true)}
    onStart={async () => {
      await postStream(stream);
      router.push(`/${params.user}/host/live`);
    }}
  />

  {modalOpen && (
    <ActivityModal
      user={params.user}
      onSelect={(a, b) => {
        setStream({ ...stream, activity: a, badge: b });
        setModalOpen(false);
      }}
      onClose={() => setModalOpen(false)}
    />
  )}
</StreamView>)
}

export default Page;
