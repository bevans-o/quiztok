import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig"; // wherever the db is configured
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";
import { Badge, getBadgeWinners } from "./badge";
import { onSnapshot, doc, setDoc, updateDoc, collection, query, getDocs, deleteDoc } from "firebase/firestore";
import { checkAnswer } from "./answer";
import { assignBadge } from "./badge-owner";

export type Stream = {
  host: string;
  questionStatus: QuestionStatus;
  activity?: Activity;
  currentQuestion: number;
  viewerCount: number;
  questionPercentage: number;
  userAnswers: Map<string, Answer>; // Map from user ID to their Answer
  scores: LeaderboardData;
  badge?: Badge;
  condition?: BadgeCondition;
};

export type BadgeCondition = "Top Scorer" | "Top Three" | "Top Five";

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
    if (!stream) return;
    if (!stream.activity) return;

    // if the activity is over, update status and exit
    if (stream.currentQuestion >= stream.activity.sections.length) {
      updateStream({ questionStatus: "ended" });
      return;
    }

    // fetch answers
    let q = query(collection(db, "streams", streamId, "userAnswers"));
    const docs = (await getDocs(q)).docs;
    const userAnswers = docs.map((doc) => doc.data() as Answer);

    // update leaderboard
    const { percentCorrect, scores } = updateLeaderboard(userAnswers) ?? { percentCorrect: 0, scores: {} };

    // Update the stream data with the new leaderboard
    updateStream({
      questionPercentage: percentCorrect,
      questionStatus: "ended",
      scores: scores,
          });
  };

  const updateLeaderboard = (userAnswers: Answer[]) => {
    if (!stream) return;

    if (!stream.activity) return;
    if (stream.currentQuestion >= stream.activity.sections.length) return;

    const scores = { ...stream.scores };
    const question = stream.activity.sections[stream.currentQuestion];

    let correctCount = 0;

    userAnswers.forEach((answer) => {
      // make typescript happy
      if (!stream.activity) return;
      const correct = checkAnswer(answer, stream.activity, stream.currentQuestion);

      if (correct) {
        // add points, or add entry if it doesn't exist yet
        scores[answer.user] = scores[answer.user] ? scores[answer.user] + question.points : question.points;
        correctCount += 1;
      } else if (!scores[answer.user]) {
        // check to add user to scoreboard even if they get the question incorrect
        scores[answer.user] = 0;
      }

      // clear answer
      deleteDoc(doc(db, "streams", streamId, "userAnswers", answer.user));
    });

    const percentCorrect = (correctCount / userAnswers.length) * 100;

    console.log(percentCorrect);

    return { percentCorrect, scores };
  };

  const changeQuestion = async () => {
    const target = stream ? stream.currentQuestion + 1 : 0;

    await updateStream({ currentQuestion: target, questionStatus: "active" });

    if (target === stream?.activity?.sections.length) {
      // activity is over, assign badges
      const winners = getBadgeWinners(stream);

      winners.forEach((winner) => {
        assignBadge({ name: winner, id: stream.badge?.id ?? "" });
      });
    }
  };

  const submitAnswer = (userId: string, answer: Answer) => {
    console.log(`submitAnswer: user: ${userId}, answer: ${answer.answerType.type}`);
    setDoc(doc(db, "streams", streamId, "userAnswers", userId), answer);
    
    // as a shortcut (and to reduce rerenders) we won't update the state here
    // we can store all the answers, then only query them when we need to check them
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

export async function getStreams(): Promise<Stream[]> {
  try {
    const response = await fetch(`/api/streams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const streams = await response.json();

      return streams;
    } else {
      console.error("Failed to get streams: ", response.statusText);
      return [];
    }
        } catch (error) {
    console.error("Error getting streams: ", error);
  }

  return [];
}
