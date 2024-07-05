import { Activity } from "./activity";

export type Stream = {
  user: string;
  activity?: Activity;
  currentQuestion: number;

  // some way of tracking answers
};

// hook to subscribe to current question
export function useCurrentQuestion(streamId: string) {}

// hook to get leaderboard
export function useLeaderboard(streamId: string) {}
