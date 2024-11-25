import React, { FC } from "react";
import { Slide } from "../db";

type QuestionCardProps = {
  number: number;
  question: Slide["question"];
  answers: Slide["answers"];
};

export default function QuestionCard({
  number,
  question,
  answers,
}: QuestionCardProps) {
  return (
    <div className="p-4 bg-white rounded-lg md:max-w-[800px]">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id} className="mb-2">
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
