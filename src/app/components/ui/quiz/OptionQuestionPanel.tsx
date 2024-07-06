import { OptionQuestion } from "@/app/lib/activity";
import { Answer } from "@/app/lib/answer";
import { QuestionStatus } from "@/app/lib/stream";
import React from "react";

function OptionQuestionPanel({
  question,
  status,
  submitAnswer,
}: {
  question: OptionQuestion;
  status: QuestionStatus;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex gap-1 w-full">
      {question.options.map((option, i) => (
        <div
          className="grow bg-neutral-700/30 border border-neutral-700/30 rounded-md flex flex-col justify-center items-center px-1 py-3"
          key={i}
        >
          <div className="text-[10px] font-bold text-neutral-400/50">{status === "ended" ? "33%" : letters[i]}</div>
          <div className="truncate">{option.text}</div>
        </div>
      ))}
    </div>
  );
}

export default OptionQuestionPanel;
