import { Activity, QuizQuestion } from "@/app/lib/activity";
import { Answer } from "@/app/lib/answer";
import React from "react";
import OptionQuestionPanel from "./OptionQuestionPanel";
import SliderQuestionPanel from "./SliderQuestionPanel";
import RankingQuestionPanel from "./RankingQuestionPanel";
import Button from "../Button";
import { QuestionStatus } from "@/app/lib/stream";

function QuestionPanel({
  activity,
  question,
  number,
  status,
  changeQuestion,
  endGuessing,
  submitAnswer,
}: {
  activity: Activity;
  question: QuizQuestion;
  number: number;
  status: QuestionStatus;
  changeQuestion?: () => void;
  endGuessing?: () => void;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  return (
    <div className="w-full bg-neutral-950/70 rounded-md text-white p-3 pt-2 text-[13px] flex flex-col gap-3">
      <div className="flex flex-col w-full gap-1">
        <div className="w-full flex justify-between gap-2">
          <div className="truncate">{question.text}</div>
          <div className="font-light text-neutral-400 whitespace-nowrap">Question {number + 1}</div>
        </div>

        {question.type == "option" && (
          <OptionQuestionPanel submitAnswer={submitAnswer} question={question} status={status} />
        )}
        {question.type == "slider" && (
          <SliderQuestionPanel submitAnswer={submitAnswer} question={question} status={status} />
        )}
        {question.type == "ranking" && (
          <RankingQuestionPanel submitAnswer={submitAnswer} question={question} status={status} />
        )}
      </div>

      {changeQuestion && status === "ended" && (
        <Button size={"full"} className="text-sm py-2" onClick={changeQuestion}>
          {number === activity.sections.length ? "End Activity" : "Next Question"}
        </Button>
      )}
      {endGuessing && status === "active" && (
        <Button size={"full"} className="text-sm py-2" onClick={endGuessing}>
          End Guessing
        </Button>
      )}
    </div>
  );
}

export default QuestionPanel;
