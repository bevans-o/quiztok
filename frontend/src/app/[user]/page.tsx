"use client";

import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/ui/Button";
import { cn } from "../lib/util";

function Page({ params }: { params: { user: string } }) {
  const [name, setName] = useState<string>("");

  return (
    <div className="w-full h-full bg-gradient-to-t from-rose-700/10 to-rose-700/0 flex flex-col gap-16 justify-center items-center">
      <div className="text-xl font-bold text-neutral-200">
        Joining <span className="text-rose-400">{params.user}&apos;s</span> stream
      </div>
      <div className="flex flex-col gap-2 justify-center items-center text-neutral-400">
        <div>Enter a username.</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-64 rounded p-2 bg-neutral-800/20 text-neutral-300 font-semibold border border-neutral-900"
        />
      </div>

      <div className={cn("flex flex-col gap-2 transition-opacity", name ? "" : "opacity-20")}>
        <Link href={`/${name}/view/${params.user}`}>
          <Button disabled={!name}>Join</Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
