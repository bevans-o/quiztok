import { SliderQuestion } from "@/app/lib/activity";
import { AnswerSlider } from "@/app/lib/answer";
import { QuestionStatus } from "@/app/lib/stream";
import React, { useState } from "react";
import Button from "../Button";

function SliderQuestionPanel({
  question,
  status,
  submitAnswer,
}: {
  question: SliderQuestion;
  status: QuestionStatus;
  submitAnswer?: (answer: AnswerSlider) => void;
}) {
  const [value, setValue] = useState<number>(50);

  return (
    <div className="flex flex-col pt-2">
      <div className="relative w-full flex justify-between text-xs text-neutral-500 px-[3px] pb-2">
        <div>{question.min}</div>
        <div>{question.max}</div>
      </div>
      <input
        type="range"
        className="w-full slider slider-dark truncate grow"
        max={question.max}
        min={question.min}
        value={submitAnswer ? value : question.correct}
        onChange={(e) => (submitAnswer ? setValue(parseInt(e.target.value)) : {})}
      />

      <div className="w-full h-2 px-[13px] pb-5 pointer-events-none">
        <div className="w-full relative">
          <div
            className="text-xs absolute -translate-x-[50%] bottom-0 translate-y-[5px] font-bold text-neutral-300 select-none "
            style={{ left: `${submitAnswer ? value : question.correct}%` }}
          >
            {submitAnswer ? value : question.correct}
          </div>
        </div>
      </div>

      {submitAnswer && (
        <Button
          size="full"
          className="py-2 text-base"
          onClick={() => submitAnswer?.({ type: "slider", selectedValue: value })}
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default SliderQuestionPanel;
