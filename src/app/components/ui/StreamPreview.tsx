import { Stream } from "@/app/lib/stream";
import Link from "next/link";
import React from "react";

function StreamPreview({ stream }: { stream: Stream }) {
  return (
    <Link
      href={`view/${stream.host}`}
      className="w-full bg-neutral-950/40 border border-neutral-900/50 rounded-md py-2 px-3 text-sm hover:border-rose-500/50 transition-colors"
    >
      <div className="font-semibold">{stream.host}</div>
      {stream.activity && <div className="text-neutral-500 text-xs">{stream.activity?.name}</div>}
    </Link>
  );
}

export default StreamPreview;
