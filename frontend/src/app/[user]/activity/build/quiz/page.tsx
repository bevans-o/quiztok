"use client";

import Button from "@/app/components/ui/Button";
import BuilderQuestion from "@/app/components/ui/builder/BuilderQuestion";
import { QuizActivity } from "@/app/lib/activity";
import React, { useState } from "react";

function Page({ params }: { params: { user: string } }) {
  const [quiz, setQuiz] = useState<QuizActivity>({
    id: "",
    name: "",
    sections: [{ type: "option", points: 1, options: [{ text: "A", correct: true }, { text: "B" }, { text: "C" }] }],
    date: new Date(Date.now()),
    author: params.user,
  });

  return (
    <>
      <div className="flex flex-col w-full relative overflow-hidden">
        <div className="p-6">
          <input
            value={quiz.name}
            placeholder="Name Your Quiz"
            onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
            className="w-full text-3xl font-bold text-neutral-800 truncate focus:outline-none placeholder:text-neutral-300"
          />
        </div>

        <div className="flex flex-col">
          {quiz.sections.map((section, index) => (
            <BuilderQuestion key={index} />
          ))}
        </div>

        <div className="p-6">
          <button
            className="w-full border-2 border-dotted border-neutral-200 rounded-lg px-4 py-8 text-neutral-400 hover:bg-neutral-50 transition-colors"
            onClick={() =>
              setQuiz({
                ...quiz,
                sections: [
                  ...quiz.sections,
                  {
                    type: "option",
                    points: 1,
                    options: [{ text: "A", correct: true }, { text: "B" }, { text: "C" }],
                  },
                ],
              })
            }
          >
            Add a Question
          </button>
        </div>
      </div>
      <div className="w-full pt-4 pb-8 px-6 border-t-2 border-neutral-200 bg-white z-10">
        <Button disabled={!(quiz.name && quiz.sections.length > 0)} size={"full"}>
          Done
        </Button>
      </div>
    </>
  );
}

export default Page;
