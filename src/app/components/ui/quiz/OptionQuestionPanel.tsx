import { OptionQuestion } from "@/app/lib/activity";
import { AnswerOption } from "@/app/lib/answer";
import { QuestionStatus } from "@/app/lib/stream";
import React from "react";

function OptionQuestionPanel({
  question,
  status,
  submitAnswer,
}: {
  question: OptionQuestion;
  status: QuestionStatus;
  submitAnswer?: (answer: AnswerOption) => void;
}) {
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex gap-1 w-full">
      {question.options.map((option, i) => (
        <button
          className="grow bg-neutral-700/30 border border-neutral-700/30 rounded-md flex flex-col justify-center items-center px-1 py-3"
          key={i}
          onClick={() => submitAnswer?.({ type: "option", selectedOptionIndex: i })}
        >
          <div className="text-[10px] font-bold text-neutral-400/50">{status === "ended" ? "33%" : letters[i]}</div>
          <div className="truncate">{option.text}</div>
        </button>
      ))}
    </div>
  );
}

export default OptionQuestionPanel;
