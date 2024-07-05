import LiveFooter from "@/app/components/layout/LiveFooter";
import LiveHeader from "@/app/components/layout/LiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import React from "react";

function Page() {
  return (
    <StreamView>
      <LiveHeader className="absolute top-0" />

      <LiveFooter className="absolute bottom-0" />
    </StreamView>
  );
}

export default Page;
