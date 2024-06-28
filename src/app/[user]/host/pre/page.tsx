import PreLiveFooter from "@/app/components/layout/PreLiveFooter";
import PreLiveHeader from "@/app/components/layout/PreLiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import React from "react";

function Page() {
  return (
    <StreamView>
      <PreLiveHeader className="absolute top-0" />
      <PreLiveFooter className="absolute bottom-0" />
    </StreamView>
  );
}

export default Page;
