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

export async function postActivity(activity: Activity) {
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

export async function getActivities(user?: string): Promise<Activity[]> {
  try {
    const response = await fetch(`/api/activities${user ? `?user=${user}` : ""}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const activities = await response.json();

      return activities.map((activity: Activity) => {
        return { ...activity, date: new Date(activity.date) };
      });
    } else {
      console.error("Failed to get activities: ", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Error getting activities: ", error);
  }

  return [];
}

export async function getActivity(id: string): Promise<Activity | null> {
  try {
    const response = await fetch(`/api/activity?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const activity = (await response.json()) as Activity;
      return activity;
    } else {
      console.error("Failed to get activity: ", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error getting activity: ", error);
  }

  return null;
}

export function getActivityTypeString(type: string): string {
  switch (type) {
    case "quiz":
      return "Quiz";
    default:
      return "Unknown";
  }
}
