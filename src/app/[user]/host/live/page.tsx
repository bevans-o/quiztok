"use client";

import LiveFooter from "@/app/components/layout/LiveFooter";
import LiveHeader from "@/app/components/layout/LiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import { useStream } from "@/app/lib/stream";
import React from "react";

function Page({ params }: { params: { user: string } }) {
  const { stream, changeQuestion, endGuessing } = useStream(params.user);

  return (
    <StreamView>
      <LiveHeader className="absolute top-0" />

      <LiveFooter className="absolute bottom-0" />
    </StreamView>
  );
}

export default Page;
