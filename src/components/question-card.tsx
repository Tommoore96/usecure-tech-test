import React, { FC } from "react";
import { Slide } from "../db";
import { cn } from "../utils/cn";
import RadioButton from "./radio";

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
      <ul className="gap-3 flex flex-col">
        {answers.map((answer) => (
          <RadioButton
            intent={"primary"}
            id={answer.id}
            question={question}
            value={answer.id}
            label={answer.text}
          />
        ))}
      </ul>
    </div>
  );
}
