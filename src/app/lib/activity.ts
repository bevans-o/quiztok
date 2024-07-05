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

// MOCK: post, end activity details to db
export async function postActivity(activity: Activity) {
  console.log(`POST Activity: ${activity.name}`);
  console.log(activity);

  try {
    const response = await fetch("/api/activity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    });
    if (response.ok) {
      console.log(`Activity ${activity.name} posted successfully`);
      // Optionally, return response data or handle success
    } else {
      console.error("Failed to post activity:", response.statusText);
      // Handle error, show message, retry logic, etc.
    }
  } catch (error) {
    console.error("Error posting activity:", error);
    // Handle network errors or other exceptions
  }
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
