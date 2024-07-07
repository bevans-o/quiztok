import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig"; // wherever the db is configured
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";
import { Badge } from "./badge";
import { onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";
import { checkAnswer } from "./answer";

export type Stream = {
  host: string;
  questionStatus: QuestionStatus;
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

export type QuestionStatus = "active" | "ended";

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
    if (!currentStream || !currentStream.userAnswers || !currentStream.activity) return;

    // Type assertion to ensure currentStream.activity is of type QuizActivity
    const activity = currentStream.activity as Activity;

    // Iterate through the user answers
    // ERROR: TypeError: currentStream.userAnswers.forEach is not a function
    // i think we need to convert the object keys into an array first to use forEach
    // currentStream.userAnswers.forEach((answer, userId) => {
    //   // Check if the answer is correct
    //   const isCorrect = checkAnswer(answer, activity, currentStream.currentQuestion);
    //   // Update the leaderboard data
    //   if (isCorrect) {
    //     currentStream.scores[userId] = (currentStream.scores[userId] || 0) + 1;
    //   }
    // });

    // Update the stream data with the new leaderboard
    updateStream({
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
    // updateDoc(doc(db, "streams", streamId, "userAnswers", userId), answer);
    // ERROR: FirebaseError: No document to update: projects/quiztok-123c4/databases/(default)/documents/streams/ben/userAnswers/benjamin
    // i think we need to check if the doc exists first? or use setDoc which might handle that itself?

    // Update stream state with new user answer
    setStream((prevStream) => {
      if (prevStream) {
        return {
          ...prevStream,
          // userAnswers: new Map(prevStream.userAnswers).set(userId, answer),
          // ERROR: TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
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

export async function assignBadge(stream: Stream) {
  const badge = stream.badge
  if (badge) {
    const sortedUsers: Record<string, number> = Object.fromEntries(
      Object.entries(stream.scores).sort((a, b) => b[1] - a[1])
    );
    let badgeHolders: string[] = [];

    if (badge.condition == "Top Scorer") {
      for (let user in sortedUsers) {
        if (stream.scores[user] < sortedUsers[0].valueOf()) {
          continue
        }
        else if (stream.scores[user] === sortedUsers[0].valueOf()) {
          badgeHolders.push(user);
        }
        else {
          break
        }
      }
      
    }

    else if (badge.condition == "Top Three") {
      let count = 0
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 3) {
          badgeHolders.push(user);
          count += 1
        }
        else {
          break
        }
      }
    }

    else if (badge.condition == "Top Three") {
      let count = 0
      for (let user in sortedUsers) {
        if (stream.scores[user] <= sortedUsers[0].valueOf() && count < 5) {
          badgeHolders.push(user);
          count += 1
        }
        else {
          break
        }
      }
    }

  }
  
}

