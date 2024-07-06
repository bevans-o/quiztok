import { SliderQuestion } from "@/app/lib/activity";
import { Answer } from "@/app/lib/answer";
import React from "react";

function SliderQuestionPanel({
  question,
  submitAnswer,
}: {
  question: SliderQuestion;
  submitAnswer?: (id: string, answer: Answer) => void;
}) {
  return <div>SliderQuestionPanel</div>;
}

export default SliderQuestionPanel;
