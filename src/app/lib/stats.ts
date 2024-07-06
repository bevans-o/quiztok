import { useState, useEffect } from "react";
import { database as db } from "@/app/firebaseConfig"; // wherever the db is configured
import { Activity, QuizQuestion } from "./activity";
import { Answer } from "./answer";
import { Badge } from "./badge";
import { onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";

export type PercentageStats = {
    answer: string;
    percentage: string;
}

export function usePercentageStats(streamId: string) {
    const [statsData, setStatsData] = useState<PercentageStats>({});
    const unsubscribe = db.ref(`quiz-activity/${streamId}`).on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            setStatsData({
            })
        }
    }
}