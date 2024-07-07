"use client";

import StreamPreview from "@/app/components/ui/StreamPreview";
import { getStreams, Stream } from "@/app/lib/stream";
import React, { useEffect, useState } from "react";

function Page({ params }: { params: { user: string } }) {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    getStreams().then((res) => {
      setStreams(res);
    });
  }, [setStreams]);

  return (
    <div className="w-full h-full bg-gradient-to-t from-rose-700/10 to-rose-700/0 flex flex-col gap-16 justify-center items-center">
      <div className="text-xl font-bold text-neutral-200">Join a stream</div>
      <div className="flex flex-col gap-2 justify-center items-center text-neutral-400 w-full px-6">
        {streams.map((stream, i) => (
          <StreamPreview stream={stream} key={i} />
        ))}

        {streams.length < 1 && <div className="text-sm text-neutral-500">No active streams.</div>}
      </div>
    </div>
  );
}

export default Page;
