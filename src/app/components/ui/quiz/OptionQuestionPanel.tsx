import { OptionQuestion } from "@/app/lib/activity";
import { AnswerOption } from "@/app/lib/answer";
import { QuestionStatus } from "@/app/lib/stream";
import { cn } from "@/app/lib/util";
import React, { useState } from "react";

function OptionQuestionPanel({
  question,
  status,
  locked = false,
  submitAnswer,
}: {
  question: OptionQuestion;
  status: QuestionStatus;
  locked?: boolean;
  submitAnswer?: (answer: AnswerOption) => void;
}) {
  const [selected, setSelected] = useState<number>(-1);
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="flex gap-1 w-full">
      {question.options.map((option, i) => (
        <button
          disabled={locked || status === "ended"}
          className={cn(
            "grow  border  rounded-md flex flex-col justify-center items-center px-1 py-3",
            locked ? "opacity-50" : "",
            selected === i ? "bg-rose-500/50 border-rose-500/30" : "bg-neutral-700/30 border-neutral-700/30"
          )}
          key={i}
          onClick={() => {
            setSelected(i);
            submitAnswer?.({ type: "option", selectedOptionIndex: i });
          }}
        >
          <div className="text-[10px] font-bold text-neutral-400/50">{status === "ended" ? "33%" : letters[i]}</div>
          <div className="truncate">{option.text}</div>
        </button>
      ))}
    </div>
  );
}

export default OptionQuestionPanel;
