"use client";

import Button from "@/app/components/ui/Button";
import BuilderQuestion from "@/app/components/ui/builder/BuilderQuestion";
import { postActivity, QuizActivity, QuizQuestion } from "@/app/lib/activity";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Page({ params }: { params: { user: string } }) {
  const router = useRouter();

  const [quiz, setQuiz] = useState<QuizActivity>({
    id: "",
    name: "",
    sections: [
      { type: "option", text: "", points: 1, options: [{ text: "", correct: true }, { text: "" }, { text: "" }] },
    ],
    date: new Date(Date.now()),
    author: params.user,
    type: "quiz",
  });

  const handleQuestionChange = (question: QuizQuestion, index: number) => {
    console.log(question);
    const newSections = [...quiz.sections];
    newSections[index] = question;

    setQuiz({ ...quiz, sections: newSections });
  };
  const handleQuestionDeletion = (index: number) => {
    const newSections = [...quiz.sections].filter((_, i) => i != index);

    setQuiz({ ...quiz, sections: newSections });
  };

  return (
    <div className="flex flex-col h-full w-full relative overflow-hidden justify-between">
      <div className="flex flex-col grow overflow-y-scroll">
        <div className="p-6">
          <input
            value={quiz.name}
            placeholder="Name Your Quiz"
            onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
            className="w-full text-3xl font-bold text-neutral-800 truncate focus:outline-none placeholder:text-neutral-300"
          />
        </div>

        <div className="flex flex-col">
          {quiz.sections.map((question, index) => (
            <BuilderQuestion
              question={question}
              key={index}
              index={index}
              onChange={(q: QuizQuestion, i: number) => handleQuestionChange(q, i)}
              onDelete={() => handleQuestionDeletion(index)}
            />
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
                    text: "",
                    points: 1,
                    options: [{ text: "", correct: true }, { text: "" }, { text: "" }],
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
        <Button
          disabled={!(quiz.name && quiz.sections.length > 0)}
          size={"full"}
          onClick={() => {
            postActivity(quiz);
            router.push(`/${params.user}/host/pre`);
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default Page;
