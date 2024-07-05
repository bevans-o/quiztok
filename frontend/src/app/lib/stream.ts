import { useState, useEffect } from 'react';
import { db } from '../firebase'; // wherever the db is configured 
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";

export type Stream = {
  host: string;
  activity?: Activity;
  currentQuestion: number;
  viewerCount: number;
  userAnswers: Map<string, Answer>;  // Map from user ID to their Answer
  scores: LeaderboardData;
};

export type LeaderboardData = { // contains keys userID with name and score properties
  [key: string]: {
    name: string;
    score: number;
  };
};

// hook to subscribe to stream 
export function useStream(streamId: string) {
  const [stream, setStream] = useState<Stream | null>(null);

  useEffect(() => {
    // Subscribe to the real-time database changes
    const unsubscribe = db.ref(`quiz-activity/${streamId}`).on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setStream({
          host: data.host,
          activity: data.activity,
          currentQuestion: data.currentQuestion,
          viewerCount: data.viewerCount,
          userAnswers: data.userAnswers,
          scores: data.scores,
        });
      }
    });

    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [streamId]);

  const updateStream = (data: Stream) => {
    db.ref(`quiz-activity/${streamId}`).update(data);
  };

  return { stream, updateStream };
}


// hook to subscribe to current question
export function useCurrentQuestion(streamId: string) {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

  useEffect(() => {
    // Subscribe to the real-time database changes for the current question
    const unsubscribe = db.ref(`quiz-activity/${streamId}/currentQuestion`).on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCurrentQuestion(data);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [streamId]);

  const updateCurrentQuestion = (question: QuizQuestion) => {
    db.ref(`quiz-activity/${streamId}/currentQuestion`).set(question);
  };

  return { currentQuestion, updateCurrentQuestion };
}


// hook to get leaderboard
export function useLeaderboard(streamId: string) {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData>({});

  useEffect(() => {
    // Subscribe to the real-time database changes for the answers and scores
    const unsubscribe = db.ref(`quiz-activity/${streamId}`).on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {   
        setLeaderboardData(data)
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [streamId]);

  const updateLeaderboardData = (newData: LeaderboardData) => { 
    db.ref(`quiz-activity/${streamId}/answers`).set(newData);
  }

  return { leaderboardData, updateLeaderboardData };
}
