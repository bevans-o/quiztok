"use client";
import React, { useState } from "react";
import LiveFooter from "@/app/components/layout/LiveFooter";
import LiveHeader from "@/app/components/layout/LiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import PercentageStats from "@/app/components/layout/PercentageStats";

function Page() {
  const [modalOpen, setModalOpen] = useState<boolean>(true);


  return (<StreamView>
  <LiveHeader className="absolute top-0" />
  {modalOpen && (
    <PercentageStats 
    onClose={() => setModalOpen(false)}/>
  )}
  <LiveFooter className="absolute bottom-0" />
</StreamView>)
}

export default Page;
