export type Activity = {
  id: string;
  name: string;
  date: Date;
  author: string;
  sections: {}[];
};

export type QuizActivity = Activity & {
  sections: (OptionQuestion | SliderQuestion | RankingQuestion)[];
};

export type QuizQuestion = {
  points: number;
};

export type OptionQuestion = QuizQuestion & {
  options: {
    text: string;
    correct?: boolean;
  }[];
  type: "option";
};

export type SliderQuestion = QuizQuestion & {
  max: number;
  min: number;
  correct: number;
  type: "slider";
};

export type RankingQuestion = QuizQuestion & {
  options: {
    text: string;
    value: number;
  }[];
  type: "ranking";
};

// MOCKS

const sample: QuizActivity = {
  id: "012345",
  name: "Jimbo's Tuesday Trivia 25/06",
  sections: [],
  date: new Date(Date.now()),
  author: "jimbo",
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
