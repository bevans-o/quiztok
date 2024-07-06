import { Stream } from "@/app/lib/stream";
import React from "react";
import ScorePellet from "./ScorePellet";

function Leaderboard({ stream }: { stream: Stream }) {
  const current = stream.currentQuestion + 1;
  const total = stream.activity?.sections.length ?? -1 + 1;

  const keys = Object.keys(stream.scores);
  const scores = keys
    .map((key) => {
      return { name: key, score: stream.scores[key] };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, keys.length > 5 ? 5 : keys.length);

  return (
    <div className="bg-neutral-950/70 p-2 pt-1 text-white text-[13px] w-full rounded-md flex flex-col gap-2">
      <div className="flex flex-col w-full gap-1">
        <div className="flex items-center justify-between">
          <div>{stream.activity?.name}</div>
          <div className="text-neutral-400">
            Question {current}/{total}
          </div>
        </div>
        <div className="w-full h-1 rounded-full bg-neutral-500/40">
          <div style={{ width: `${(current / total) * 100}%` }} className="h-full bg-rose-500 rounded-full"></div>
        </div>
      </div>
      <div className="w-full flex gap-2">
        {scores.map((score, i) => (
          <ScorePellet rank={i + 1} name={score.name} score={score.score} highlight={i === 0} />
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
