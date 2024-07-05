export type Answer = { 
  questionId: string;
  answer: AnswerOption | AnswerSlider | AnswerRanking
}

export type AnswerOption = { 
  type: "option";
  selectedOptionIndex: number;
}

export type AnswerSlider = { 
  type: "slider";
  selectedValue: number;
}

export type AnswerRanking = {
  type: "ranking";
  rankedItems: {text: string; rank: number}[];
}