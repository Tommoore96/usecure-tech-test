import React from "react";
import { createLazyFileRoute, Link, notFound } from "@tanstack/react-router";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import { button } from "../components/button";
import useUserAnswersStore from "../store";

export const Route = createLazyFileRoute("/slides/$slideIndex")({
  component: Index,
});

function Index() {
  const { slides, userAnswers } = useUserAnswersStore();

  const { slideIndex } = Route.useParams();
  console.log("🚀 ~ Index ~ slideIndex:", slideIndex);

  console.log("🚀 ~ Index ~ data.slides:", data.slides);
  const currentSlide = data.slides.find((slide) => slide.index === slideIndex);
  console.log("🚀 ~ Index ~ currentSlide:", currentSlide);

  if (!currentSlide) {
    throw notFound();
  }

  const hasCurrentQuestionBeenAnswered = !!userAnswers.hasOwnProperty(
    slides[slideIndex].question
  );

  return (
    <div className="flex flex-1 flex-col h-full ">
      <div className="flex flex-1 flex-col justify-start md:justify-center pt-12 md:pt-0 px-4 sm:px-12">
        <QuestionCard
          currentQuestion={slideIndex}
          key={currentSlide.question}
          className="self-center"
          question={currentSlide.question}
          answers={currentSlide.answers}
        />
      </div>
      <div className="justify-self-end flex justify-between items-center border-t-1 border-neutral w-full h-18 md:h-20 px-4 md:px-8 gap-2">
        <Link
          className={button({
            intent: "secondary",
            className: "w-1/2 sm:w-auto justify-center",
          })}
          to={`/${slideIndex - 1}`}
          disabled={slideIndex === 1}
        >
          Back
        </Link>
        <Link
          className={button({
            intent: "primary",
            className: "w-1/2 sm:w-auto justify-center",
          })}
          to={`/${slideIndex < slides.length ? slideIndex + 1 : "assessment-complete"}`}
          disabled={!hasCurrentQuestionBeenAnswered}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
