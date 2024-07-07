import { Stream } from "@/app/lib/stream";
import React from "react";
import Button from "../Button";
import { getBadgeWinners } from "@/app/lib/badge";
import ScorePellet from "./ScorePellet";
import Badge from "../Badge";

function SummaryScreen({ stream, user, onEnd }: { stream: Stream; user: string; onEnd?: () => void }) {
  const winners = getBadgeWinners(stream);

  // get top five scores
  const keys = Object.keys(stream.scores);
  const topFive = keys
    .map((key) => {
      return { name: key, score: stream.scores[key] };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const userWon = winners.includes(user);

  return (
    <div className="w-full h-full flex justify-center items-center absolute inset-0 z-10 p-12 text-white text-sm">
      <div className="w-full bg-neutral-950/70 p-2 rounded-md flex flex-col gap-2 items-center">
        <div className="text-lg font-semibold text-neutral-200">
          {userWon ? `Nice work, ${user}!` : onEnd ? `Well hosted, ${user}!` : `Better luck next time, ${user}`}
        </div>

        {winners.length > 0 && stream.badge && (
          <div className="flex flex-col bg-neutral-950/30 rounded-md p-2 w-full">
            <div className="w-full uppercase font-semibold text-sm text-neutral-400 text-center pb-2">
              Badge Winners
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {winners.map((winner) => (
                <div className="flex items-center gap-1">
                  <div>{winner}</div>
                  <Badge {...stream.badge} size={"small"} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col bg-neutral-950/30 rounded-md p-2 w-full">
          <div className="w-full uppercase font-semibold text-sm text-neutral-400 text-center pb-2">Leaderboard</div>
          {topFive.map((score, i) => (
            <div className="w-full flex gap-1">
              <ScorePellet rank={i + 1} name={score.name} score={score.score} highlight={score.name === user} grow />
            </div>
          ))}
        </div>

        {onEnd && (
          <div className="w-full">
            <Button size="full" onClick={onEnd} className="py-2">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SummaryScreen;
