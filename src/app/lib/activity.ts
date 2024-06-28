export type Activity = {
  id: string;
  name: string;
  sections: Section[];
  date: Date;
  type: ActivityType;
  author: string;
};

export type Section = {};
export type ActivityType = "quiz";

const sample: Activity = {
  id: "012345",
  name: "Jimbo's Tuesday Trivia 25/06",
  sections: [{}, {}, {}],
  date: new Date(Date.now()),
  type: "quiz",
  author: "jimbo",
};

// MOCK: post
export function postActivity(activity: Activity) {
  console.log(`POST Activity: ${activity.name}`);
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

export function getActivityTypeString(type: ActivityType): string {
  switch (type) {
    case "quiz":
      return "Quiz";
    default:
      return "Unknown Type";
  }
}
