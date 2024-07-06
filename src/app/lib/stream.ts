import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig"; // wherever the db is configured
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";
import { Badge } from "./badge";
import { onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";

export type Stream = {
  host: string;
  questionStatus: "active" | "ended";
  activity?: Activity;
  currentQuestion: number;
  viewerCount: number;
  userAnswers: Map<string, Answer>; // Map from user ID to their Answer
  scores: LeaderboardData;
  badge?: Badge;
};

export type LeaderboardData = {
  // contains keys userID with name and score properties
  [key: string]: number;
};

// hook to subscribe to stream
export function useStream(streamId: string) {
  const [stream, setStream] = useState<Stream | null>(null);

  useEffect(() => {
    // subscribes to real-time database changes
    const unsub = onSnapshot(doc(db, "/streams", streamId), (snapshot) => {
      const data = snapshot.data();
      if (data) {
        setStream(data as Stream);
      }
    });

    return unsub;
  }, [streamId]);

  const updateStream = async (data: Partial<Stream>) => {
    await setDoc(doc(db, "streams", streamId), data, { merge: true });
  };

  const endGuessing = async () => {
    // TODO: handle leaderboard calculations
    const sampleLeaderboard = {
      will: 23,
      jill: 15,
      bill: 4,
    };

    // Get the current stream data
    const currentStream = stream;
    if (!currentStream || !currentStream.userAnswers) return;

    // Iterate through the user answers
    currentStream.userAnswers.forEach((answer, userId) => {
      // Check if the answer is correct
      // const isCorrect = /* some logic to check if the answer is correct */
      // Update the leaderboard data
      // if (isCorrect) {
      //   currentStream.scores[userId] = (currentStream.scores[userId] || 0) + 1;
      // }
    });

    // Update the stream data with the new leaderboard
    await updateStream({
      questionStatus: "ended",
      // scores: currentStream.scores,
      scores: sampleLeaderboard, // temp sample scores
    });
  };

  const changeQuestion = async () => {
    const target = stream ? stream.currentQuestion + 1 : 0;

    await updateStream({ currentQuestion: target, questionStatus: "active" });
  };

  const submitAnswer = (userId: string, answer: Answer) => {
    console.log("NOT IMPLEMENTED: submitAnswer");
    updateDoc(doc(db, "streams", streamId, "userAnswers", userId), answer);

    // Update stream state with new user answer
    setStream((prevStream) => {
      if (prevStream) {
        return {
          ...prevStream,
          userAnswers: new Map(prevStream.userAnswers).set(userId, answer),
        };
      }
      return prevStream;
    });
  };

  return { stream, endGuessing, changeQuestion, submitAnswer };
}

export async function postStream(stream: Stream) {
  try {
    const response = await fetch("/api/stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stream),
    });
    if (response.ok) {
      console.log(`Stream ${stream.host} posted successfully`);
    } else {
      console.error("Failed to post stream object:", response.statusText);
    }
  } catch (error) {
    console.error("Error posting stream object:", error);
  }
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
