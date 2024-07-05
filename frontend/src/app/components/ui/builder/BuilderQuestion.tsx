import { QuizQuestion } from "@/app/lib/activity";
import React from "react";
import ToggleBubbles from "../ToggleBubbles";
import { cn } from "@/app/lib/util";
import { Reorder } from "framer-motion";

function BuilderQuestion({
  question,
  index,
  onChange = () => {},
  onDelete = () => {},
}: {
  question: QuizQuestion;
  index: number;
  onChange?: (q: QuizQuestion, i: number) => void;
  onDelete?: () => void;
}) {
  // if type changes, set the question to a template for that type
  const handleTypeChange = (value: string) => {
    if (value === question.type) return;
    switch (value) {
      case "option":
        onChange(
          {
            type: "option",
            text: "",
            points: 1,
            options: [{ text: "", correct: true }, { text: "" }, { text: "" }],
          },
          index
        );
        break;

      case "slider":
        onChange(
          {
            type: "slider",
            text: "",
            points: 1,
            max: 100,
            min: 0,
            correct: 50,
          },
          index
        );
        break;

      case "ranking":
        onChange(
          {
            type: "ranking",
            text: "",
            points: 1,
            options: [
              { text: "", value: 1, key: "A" },
              { text: "", value: 2, key: "B" },
              { text: "", value: 3, key: "C" },
            ],
          },
          index
        );
        break;

      default:
        return;
    }
  };

  const handleTextChange = (value: string) => {
    onChange({ ...question, text: value }, index);
  };

  const handleOptionChange = (option: { text: string; correct?: boolean }, optionIndex: number) => {
    if (question.type != "option") return;
    if (optionIndex >= question.options.length) return;

    const newOptions = [...question.options];
    newOptions[optionIndex] = option;

    const correctCount = newOptions.reduce((prev, curr) => (curr.correct ? prev + 1 : prev), 0);
    if (correctCount < 1) return;

    onChange({ ...question, options: newOptions }, index);
  };

  const handleRankingChange = (options: { text: string; value: number; key: string }[]) => {
    if (question.type != "ranking") return;

    const newOptions = options.map((option, i) => {
      return { text: option.text, value: i + 1, key: option.key };
    });

    onChange({ ...question, options: newOptions }, index);
  };

  const handleRankingTextChange = (option: { text: string; value: number; key: string }, optionIndex: number) => {
    if (question.type != "ranking") return;
    if (optionIndex >= question.options.length) return;

    const newOptions = [...question.options];
    newOptions[optionIndex] = option;

    onChange({ ...question, options: newOptions }, index);
  };

  return (
    <div className="pb-8">
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
            className="outline-none grow"
          />
        </div>

        <button
          className="flex justify-center items-center w-6 h-6 rounded-full text-neutral-400 border border-neutral-300 font-medium text-xs hover:text-neutral-500 transition-colors"
          onClick={onDelete}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17 18" fill="none">
            <path d="M1 1.5L16 16.5M16 1.5L0.999968 16.5" stroke="currentColor" strokeWidth="3" />
          </svg>
        </button>
      </div>

      <ToggleBubbles
        options={["option", "slider", "ranking"]}
        onSelect={(value) => handleTypeChange(value)}
        selected={question.type}
      />

      {question.type === "option" && (
        <div className="flex flex-col px-6 gap-1">
          {question.options.map((option, optionIndex) => (
            <div className="flex gap-1 h-8" key={optionIndex}>
              <input
                value={option.text}
                placeholder="Answer"
                onChange={(e) => handleOptionChange({ ...option, text: e.target.value }, optionIndex)}
                className="h-8 outline-none grow py-2 px-3 border border-neutral-200 rounded-full text-sm"
              />

              {option.correct && (
                <button
                  className="h-full aspect-square rounded-full bg-rose-500 border-2 border-rose-400 flex justify-center items-center text-rose-200"
                  onClick={() => handleOptionChange({ ...option, correct: false }, optionIndex)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M389-248.91 176.91-460l69.66-70.65L389-388.22l324.43-323.43L783.09-642 389-248.91Z" />
                  </svg>
                </button>
              )}
              {!option.correct && (
                <button
                  className="h-full aspect-square rounded-full bg-neutral-100 border-2 border-neutral-200 flex justify-center items-center text-neutral-300"
                  onClick={() => handleOptionChange({ ...option, correct: true }, optionIndex)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M291-221.91 221.91-291l189-189-189-189L291-738.09l189 189 189-189L738.09-669l-189 189 189 189L669-221.91l-189-189-189 189Z" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {question.type === "ranking" && (
        <div className="flex gap-2 w-full px-6">
          <div className="h-full flex flex-col gap-2">
            {question.options.map((_, optionIndex) => (
              <div
                key={optionIndex}
                className="h-8 flex justify-center items-center rounded-full font-bold text-neutral-300"
              >
                {optionIndex + 1}
              </div>
            ))}
          </div>
          <Reorder.Group
            values={question.options}
            onReorder={(options) => handleRankingChange(options)}
            className="flex flex-col gap-2 w-full"
          >
            {question.options.map((option, optionIndex) => (
              <Reorder.Item
                value={option}
                key={option.key}
                className="w-full grow h-8 outline-none py-2 px-3 border border-neutral-200 bg-white rounded-full flex justify-between items-center"
              >
                <input
                  value={option.text}
                  placeholder="Answer"
                  onChange={(e) => handleRankingTextChange({ ...option, text: e.target.value }, optionIndex)}
                  className="text-sm grow w-full truncate outline-none"
                />
                <div className="h-full w-4 flex flex-col justify-around cursor-grab">
                  <div className="w-full rounded-full h-[2px] bg-neutral-300" />
                  <div className="w-full rounded-full h-[2px] bg-neutral-300" />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      )}

      {question.type === "slider" && (
        <div className="px-6 flex flex-col">
          <div className="relative w-full flex justify-between text-xs text-neutral-500 px-[3px] pb-1">
            <div>{question.min}</div>
            <div>{question.max}</div>
          </div>
          <input
            type="range"
            className="w-full slider truncate grow"
            max={question.max}
            min={question.min}
            value={question.correct}
            onChange={(e) => {
              onChange({ ...question, correct: parseInt(e.target.value) }, index);
            }}
          />

          <div className="w-full h-2 px-2 pb-8">
            <div className="w-full relative">
              <div
                className="absolute -translate-x-1/2 top-1 font-black text-base text-neutral-600 select-none"
                style={{ left: `${question.correct}%` }}
              >
                {question.correct}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuilderQuestion;
