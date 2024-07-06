import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig";
import { Activity, QuizQuestion } from "./activity";
import { onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";

export type PercentageStats = {
    answer: string;
    percentage: string;
}

export type Poll = {
    id: string;
  name: string;
  date: Date;
  author: string;
  type: string;
  response: any;
}

export function returnStats(activityId: string) {
    let stats = <unknown>[]
    const [percentage, setPercentage] = useState<PercentageStats | null>(null);
    

    
    const snap = onSnapshot(doc(db, "/activity", activityId), (snapshot) => {
        const data = snapshot.data();
        if (data) {
            data.response.map((res: any) => {
                if (res.answer in stats) {
                    stats[res.answer] = stats[res.answer] + 1
                } else {
                    stats[res.answer] = 1
                }
            })
        }
        stats.map((res: any) => {
            setPercentage({
                answer: res.index(),
                percentage: res
            })
        })
    })
    return percentage
}

export async function getStats(activityId: string) {
    try {
        const response = await fetch(`/api/stats?id=${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const poll = (await response.json()) as Poll;
          returnStats(poll)
        } else {
          console.error("Failed to get response: ", response.statusText);
          return null;
        }
      } catch (error) {
        console.error("Error getting response: ", error);
      }

    
}