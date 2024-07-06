import { RankingQuestion } from "@/app/lib/activity";
import { Answer } from "@/app/lib/answer";
import React from "react";

function RankingQuestionPanel({
  question,
  submitAnswer,
}: {
  question: RankingQuestion;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  return <div>RankingQuestionPanel</div>;
}

export default RankingQuestionPanel;
