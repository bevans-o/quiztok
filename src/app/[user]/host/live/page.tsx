"use client";

import LiveFooter from "@/app/components/layout/LiveFooter";
import LiveHeader from "@/app/components/layout/LiveHeader";
import StreamView from "@/app/components/layout/StreamView";
import IconButton from "@/app/components/ui/IconButton";
import MockChat from "@/app/components/ui/live/MockChat";
import UserCapsule from "@/app/components/ui/live/UserCapsule";
import Leaderboard from "@/app/components/ui/quiz/Leaderboard";
import { useStream } from "@/app/lib/stream";
import React from "react";

function Page({ params }: { params: { user: string } }) {
  const { stream, changeQuestion, endGuessing } = useStream(params.user);
  const questionIndex = stream?.activity ? stream.currentQuestion : -1;
  const activityActive = stream?.activity && questionIndex < stream?.activity?.sections.length && questionIndex > -1;
  const question = activityActive ? stream.activity?.sections[questionIndex] : undefined;

  console.log(stream);

  return (
    <StreamView>
      <LiveHeader className="absolute top-0 pl-4 pr-2">
        <div className="flex w-full justify-between items-center">
          <UserCapsule user={params.user} detail="0 likes" />

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed">
              <path d="M291-253.85 253.85-291l189-189-189-189L291-706.15l189 189 189-189L706.15-669l-189 189 189 189L669-253.85l-189-189-189 189Z" />
            </svg>
          </div>
        </div>

        {activityActive && <Leaderboard stream={stream} />}
      </LiveHeader>

      <LiveFooter className="absolute bottom-0 px-4">
        <MockChat />
        <div className="flex justify-between w-full">
          <IconButton label="Add" icon="add" />

          <div className="flex gap-4">
            <IconButton label="Business" icon="business" />
            <IconButton label="Subscriptions" icon="subscription" />
            <IconButton label="Share" icon="share" />
            <IconButton label="More" icon="more" />
          </div>
        </div>
      </LiveFooter>
    </StreamView>
  );
}

export default Page;
