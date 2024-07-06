import { RankingQuestion } from "@/app/lib/activity";
import { Answer } from "@/app/lib/answer";
import { QuestionStatus } from "@/app/lib/stream";
import { Reorder } from "framer-motion";
import React, { useState } from "react";
import Button from "../Button";

function RankingQuestionPanel({
  question,
  status,
  submitAnswer,
}: {
  question: RankingQuestion;
  status: QuestionStatus;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  const randomiseOptions = (a: any[]) => {
    if (a.length < 1) return [];

    const newArray = [...a];
    const rand = Math.floor(Math.random() * a.length);

    const temp = newArray[0];
    newArray[0] = newArray[rand];
    newArray[rand] = temp;

    return newArray;
  };
  const [rankings, setRankings] = useState<{ text: string; value: number; key: string }[]>(
    randomiseOptions(question.options)
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 w-full py-2">
        <div className="h-full flex flex-col gap-2">
          {question.options.map((_, optionIndex) => (
            <div
              key={optionIndex}
              className="h-8 flex justify-center items-center rounded-full font-bold text-neutral-500"
            >
              {optionIndex + 1}
            </div>
          ))}
        </div>

        {submitAnswer && (
          <Reorder.Group
            values={rankings}
            onReorder={(rankings) => {
              setRankings(rankings);
            }}
            className="flex flex-col gap-2 w-full"
          >
            {rankings.map((option, optionIndex) => (
              <Reorder.Item
                value={option}
                key={option.key}
                className="w-full grow h-8 outline-none py-2 px-3 border border-neutral-800 bg-neutral-800/40 rounded-full flex justify-between items-center"
              >
                <div className="text-sm grow w-full truncate outline-none text-neutral-200">{option.text}</div>
                <div className="h-full w-4 flex flex-col justify-around cursor-grab">
                  <div className="w-full rounded-full h-[2px] bg-neutral-700" />
                  <div className="w-full rounded-full h-[2px] bg-neutral-700" />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}

        {/* disallow dragging for host */}
        {!submitAnswer && (
          <div className="flex flex-col gap-2 w-full">
            {rankings.map((option, optionIndex) => (
              <div
                key={option.key}
                className="w-full grow h-8 outline-none py-2 px-3 border border-neutral-800 bg-neutral-800/40 rounded-full flex justify-between items-center"
              >
                <div className="text-sm grow w-full truncate outline-none text-neutral-200">{option.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      {submitAnswer && (
        <Button size="full" className="py-2 text-base">
          Submit
        </Button>
      )}
    </div>
  );
}

export default RankingQuestionPanel;
