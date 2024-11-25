import React, { FC } from "react";
import { Slide } from "../db";
import { cn } from "../utils/cn";

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
  return (
    <div className={cn("md:max-w-[800px] flex flex-col gap-8", className)}>
      <h2 className="text-xl font-semibold m-0">{question}</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id} className="">
            <input
              type="radio"
              name={question}
              id={answer.id}
              value={answer.id}
            />
            <label htmlFor={answer.id} className="ml-2">
              {answer.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
