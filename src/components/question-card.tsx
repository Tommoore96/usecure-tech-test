import React, { FC } from "react";
import { Slide } from "../db";
import { cn } from "../utils/cn";
import RadioButton from "./radio";
import useUserAnswersStore from "../store";

type QuestionCardProps = {
  number: number;
  question: Slide["question"];
  answers: Slide["answers"];
  className?: string;
};

export default function QuestionCard({
  number,
  question,
  answers,
  className,
}: QuestionCardProps) {
  const { setAnswer, userAnswers } = useUserAnswersStore();
  const selectedAnswer = userAnswers[question];

  return (
    <div className={cn("md:max-w-[800px] flex flex-col gap-8", className)}>
      <h2 className="text-xl font-semibold m-0">{question}</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="gap-3 flex flex-col">
          {answers.map((answer) => {
            let intent: "primary" | "correct" | "error" | "warning" = "primary";

            if (selectedAnswer) {
              if (selectedAnswer.correct) {
                if (selectedAnswer.answerId === answer.id) {
                  intent = "correct";
                }
              } else if (!answer.correct) {
                intent = "error";
              } else {
                intent = "warning";
              }
            }

            return (
              <div className="flex flex-col gap-1">
                <RadioButton
                  className={cn({
                    "cursor-not-allowed": !!selectedAnswer,
                  })}
                  key={answer.id}
                  intent={intent}
                  id={answer.id}
                  question={question}
                  value={answer.id}
                  label={answer.text}
                  onChange={() =>
                    setAnswer({
                      question,
                      answerId: answer.id,
                      correct: answer.correct,
                    })
                  }
                  disabled={!!selectedAnswer}
                />
                {intent === "correct" ? (
                  <span className="text-base text-success">
                    Correct. This is the correct option to select
                  </span>
                ) : null}
                {intent === "warning" ? (
                  <span className="text-base text-warning">
                    This was the correct answer: This is why
                  </span>
                ) : null}
                {intent === "error" ? (
                  <span className="text-base text-danger">
                    Incorrect. This is not the correct answer
                  </span>
                ) : null}
              </div>
            );
          })}
        </ul>
      </form>
    </div>
  );
}
