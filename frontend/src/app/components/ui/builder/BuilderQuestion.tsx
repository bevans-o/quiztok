import { QuizQuestion } from "@/app/lib/activity";
import React from "react";
import ToggleBubbles from "../ToggleBubbles";
import Heading from "../typography/Heading";
import { cn } from "@/app/lib/util";

function BuilderQuestion({
  question,
  index,
  onChange = () => {},
}: {
  question: QuizQuestion;
  index: number;
  onChange?: (q: QuizQuestion, i: number) => void;
}) {
  const handleTypeChange = (value: string) => {};
  const handleTextChange = (value: string) => {};

  return (
    <div>
      <div className="flex justify-between px-6 pt-4 border-t border-neutral-100 ">
        <div className="flex gap-2">
          <div
            className={cn(
              "flex justify-center items-center w-6 h-6 rounded-full text-neutral-500 border border-neutral-300 font-bold",
              index >= 9 ? "text-xs" : "text-sm"
            )}
          >
            {index + 1}
          </div>

          <input
            value={question.text}
            placeholder="Enter a question"
            onChange={(e) => handleTextChange(e.target.value)}
          />
        </div>

        <button className="flex justify-center items-center w-6 h-6 rounded-full text-neutral-500 border border-neutral-300 font-medium text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M1 1.5L16 16.5M16 1.5L0.999968 16.5" stroke="white" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <ToggleBubbles options={["Option", "Slider", "Ranking"]} onSelect={(value) => handleTypeChange(value)} />
    </div>
  );
}

export default BuilderQuestion;
