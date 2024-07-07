import { Activity } from "./activity";

export type Answer = {
  questionId: string;
  answerType: AnswerOption | AnswerSlider | AnswerRanking;
};

export type AnswerOption = {
  type: "option";
  selectedOptionIndex: number;
};

export type AnswerSlider = {
  type: "slider";
  selectedValue: number;
};

export type AnswerRanking = {
  type: "ranking";
  rankedItems: { text: string; rank: number }[];
};

export function checkAnswer(
  answer: Answer,
  activity: Activity,
  questionNo: number
): boolean {
  // Get the current question from the activity data
  const currentQuestion = activity.sections[questionNo];

  // Check the type of the current question
  switch (currentQuestion.type) {
    case "option":
      // For option type questions, check if the selected option is marked as correct
      if (answer.answerType.type === "option") {
        const selectedOption = currentQuestion.options[answer.answerType.selectedOptionIndex];
        return selectedOption?.correct || false;
      }
      return false;
    case "slider":
      // For slider type questions, check if the answer matches the correct value
      if (answer.answerType.type === "slider") {
        const { correct } = currentQuestion;
        return answer.answerType.selectedValue === correct;
      }
      return false;
    case "ranking":
      // For ranking type questions, check if the answer matches the correct order
      if (answer.answerType.type === "ranking") {
        const correctOrder = currentQuestion.options.map((option) => option.key);
        const userOrder = answer.answerType.rankedItems.map((item) => item.text);
        return JSON.stringify(correctOrder) === JSON.stringify(userOrder);
      }
      return false;
    default:
      return false;
  }
}
