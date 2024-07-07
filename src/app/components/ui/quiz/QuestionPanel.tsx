"use client";

import { Activity, QuizQuestion } from "@/app/lib/activity";
import { Answer, AnswerOption, AnswerRanking, AnswerSlider } from "@/app/lib/answer";
import React, { useState } from "react";
import OptionQuestionPanel from "./OptionQuestionPanel";
import SliderQuestionPanel from "./SliderQuestionPanel";
import RankingQuestionPanel from "./RankingQuestionPanel";
import Button from "../Button";
import { QuestionStatus } from "@/app/lib/stream";

function QuestionPanel({
  user,
  activity,
  question,
  number,
  status,
  changeQuestion,
  endGuessing,
  submitAnswer,
}: {
  user: string;
  activity: Activity;
  question: QuizQuestion;
  number: number;
  status: QuestionStatus;
  changeQuestion?: () => void;
  endGuessing?: () => void;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  const [lastSubmittedIndex, setLastSubmittedIndex] = useState<number>(-1);

  const handleAnswerSubmission = (a: AnswerOption | AnswerSlider | AnswerRanking) => {
    // submit answer and update index - we can use the
    // index to determine if the current question has been submitted
    submitAnswer?.(user, { questionIndex: number, answerType: a, user: user });
    setLastSubmittedIndex(number);
  };

  return (
    <div className="w-full bg-neutral-950/70 rounded-md text-white p-3 pt-2 text-[13px] flex flex-col gap-3">
      <div className="flex flex-col w-full gap-1">
        <div className="w-full flex justify-between gap-2">
          <div className="truncate">{question.text}</div>
          <div className="font-light text-neutral-400 whitespace-nowrap">Question {number + 1}</div>
        </div>

        {question.type == "option" && (
          <OptionQuestionPanel
            key={number}
            submitAnswer={submitAnswer ? handleAnswerSubmission : undefined}
            locked={lastSubmittedIndex >= number}
            question={question}
            status={status}
          />
        )}
        {question.type == "slider" && (
          <SliderQuestionPanel
            key={number}
            submitAnswer={submitAnswer ? handleAnswerSubmission : undefined}
            locked={lastSubmittedIndex >= number}
            question={question}
            status={status}
          />
        )}
        {question.type == "ranking" && (
          <RankingQuestionPanel
            key={number}
            submitAnswer={submitAnswer ? handleAnswerSubmission : undefined}
            locked={lastSubmittedIndex >= number}
            question={question}
            status={status}
          />
        )}
      </div>

      {changeQuestion && status === "ended" && (
        <Button size={"full"} className="text-sm py-2" onClick={changeQuestion}>
          {number + 1 === activity.sections.length ? "End Activity" : "Next Question"}
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
