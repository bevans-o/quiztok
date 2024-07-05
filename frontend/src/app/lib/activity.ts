export type Activity = QuizActivity;

export type BaseActivity = {
  id: string;
  name: string;
  date: Date;
  author: string;
  type: string;
};

export type QuizActivity = BaseActivity & {
  sections: QuizQuestion[];
  type: "quiz";
};

export type QuizQuestion = OptionQuestion | SliderQuestion | RankingQuestion;

export type BaseQuizQuestion = {
  points: number;
  type: string;
  text: string;
};

export type OptionQuestion = BaseQuizQuestion & {
  options: {
    text: string;
    correct?: boolean;
  }[];
  type: "option";
};

export type SliderQuestion = BaseQuizQuestion & {
  max: number;
  min: number;
  correct: number;
  type: "slider";
};

export type RankingQuestion = BaseQuizQuestion & {
  options: {
    text: string;
    value: number;
    key: string;
  }[];
  type: "ranking";
};

const sample: QuizActivity = {
  id: "012345",
  name: "Jimbo's Tuesday Trivia 25/06",
  sections: [],
  date: new Date(Date.now()),
  author: "jimbo",
  type: "quiz",
};

// MOCK: post
export function postActivity(activity: Activity) {
  console.log(`POST Activity: ${activity.name}`);
  console.log(activity);
}

// MOCK: get all
export function getActivities(user: string | undefined): Activity[] {
  if (!user) return [];
  return [sample, sample, sample, sample, sample, sample, sample, sample, sample];
}

// MOCK: get one
export function getActivity(id: string): Activity {
  return sample;
}

export function getActivityTypeString(type: string): string {
  switch (type) {
    case "quiz":
      return "Quiz";
    default:
      return "Unknown";
  }
}
