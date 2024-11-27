import React from "react";
import { Slide } from "../db";
import { cn } from "../utils/cn";
import RadioButton from "./radio-button";
import useUserAnswersStore from "../store";
import { useShallow } from "zustand/shallow";
import Badge from "./badge";

type QuestionCardProps = {
  question: Slide["question"];
  answers: Slide["answers"];
  formId: string;
  className?: string;
  currentQuestion: number;
  questionIndex?: number;
  maxQuestions?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function QuestionCard({
  question,
  answers,
  className,
  questionIndex,
  maxQuestions,
  formId,
  onChange,
}: QuestionCardProps) {
  const { setAnswer, submittedAnswers } = useUserAnswersStore(
    useShallow((state) => ({
      submittedAnswers: state.submittedAnswers,
      setAnswer: state.setAnswer,
    }))
  );
  const submittedAnswer = submittedAnswers[question];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const selectedAnswer = formData.get("answer") as string;

    const correctAnswer = answers.find((answer) => answer.correct)?.id;

    setAnswer({
      question,
      answerId: selectedAnswer,
      correct: selectedAnswer === correctAnswer,
    });
  };

  return (
    <div
      className={cn(
        "md:max-w-[800px] flex flex-col gap-8 md:w-full",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {typeof questionIndex === "number" &&
        typeof maxQuestions === "number" ? (
          <Badge className="self-start">
            {questionIndex}/{maxQuestions}
          </Badge>
        ) : null}
        <h2 className="text-xl font-semibold m-0">{question}</h2>
      </div>

      <form id={formId} onSubmit={handleSubmit}>
        <ul className="gap-3 flex flex-col">
          {answers.map((answer) => {
            let intent: "primary" | "correct" | "danger" | "warning" =
              "primary";

            if (submittedAnswer) {
              if (submittedAnswer.correct) {
                if (submittedAnswer.answerId === answer.id) {
                  intent = "correct";
                }
              } else if (submittedAnswer.answerId === answer.id) {
                intent = "danger";
              } else if (answer.correct) {
                intent = "warning";
              }
            }

            return (
              <div className="flex flex-col gap-1" key={answer.id}>
                <RadioButton
                  className={cn(
                    {
                      "cursor-not-allowed": !!submittedAnswer,
                    },
                    "max-w-[560px] w-full"
                  )}
                  key={answer.id}
                  intent={intent}
                  id={answer.id}
                  question={question}
                  value={answer.id}
                  label={answer.text}
                  name="answer"
                  disabled={!!submittedAnswer}
                  onChange={(e) => onChange?.(e)}
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
                {intent === "danger" ? (
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
