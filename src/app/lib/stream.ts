import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig"; // wherever the db is configured
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";
import { Badge } from "./badge";
import { onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";

export type Stream = {
  host: string;
  activityStatus: "active" | "ended";
  activity?: Activity;
  currentQuestion: number;
  viewerCount: number;
  userAnswers: Map<string, Answer>; // Map from user ID to their Answer
  scores: LeaderboardData;
  badge: Badge;
  submitAnswer: (userId: string, answer: Answer) => void;
  updateCurrentQuestion: (question: QuizQuestion) => void;
};

export type LeaderboardData = {
  // contains keys userID with name and score properties
  [key: string]: {
    name: string;
    score: number;
  };
};

// hook to subscribe to stream
export function useStream(streamId: string) {
  const [stream, setStream] = useState<Stream | null>(null);

  useEffect(() => {
    // subscribes to real-time database changes
    const unsub = onSnapshot(doc(db, "/streams", streamId), (snapshot) => {
      const data = snapshot.data();
      if (data) {
        setStream({
          host: data.host,
          activityStatus: data.activityStatus,
          activity: data.activity,
          currentQuestion: data.currentQuestion,
          viewerCount: data.viewerCount,
          userAnswers: data.userAnswers,
          scores: data.scores,
          badge: data.badges,
          submitAnswer: (userId, answer) => {
            updateDoc(doc(db, "streams", streamId, "userAnswers", userId), answer);
          },
          updateCurrentQuestion: (question) => {
            updateDoc(doc(db, "streams", streamId), { currentQuestion: question });
          },
        });
      }
    });

    return unsub;
  }, [streamId]);

  const updateStream = (data: Partial<Stream>) => {
    setDoc(doc(db, "streams", streamId), data, { merge: true });
  };

  return { stream, updateStream };
}

// hook to subscribe to current question

// export function useCurrentQuestion(streamId: string) {
//   const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);

//   useEffect(() => {
//     // Subscribe to the real-time database changes for the current question
//     const unsubscribe = db.ref(`quiz-activity/${streamId}/currentQuestion`).on("value", (snapshot: any) => {
//       const data = snapshot.val();
//       if (data) {
//         setCurrentQuestion(data);
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, [streamId]);

//   const updateCurrentQuestion = (question: QuizQuestion) => {
//     db.ref(`quiz-activity/${streamId}/currentQuestion`).set(question);
//   };

//   return { currentQuestion, updateCurrentQuestion };
// }

// hook to get leaderboard
// export function useLeaderboard(streamId: string) {
//   const [leaderboardData, setLeaderboardData] = useState<LeaderboardData>({});

//   useEffect(() => {
//     // Subscribe to the real-time database changes for the answers and scores
//     const unsubscribe = db.ref(`quiz-activity/${streamId}`).on("value", (snapshot: any) => {
//       const data = snapshot.val();
//       if (data) {
//         setLeaderboardData(data);
//       }
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, [streamId]);

//   const updateLeaderboardData = (newData: LeaderboardData) => {
//     db.ref(`quiz-activity/${streamId}/answers`).set(newData);
//   };

//   return { leaderboardData, updateLeaderboardData };
// }
