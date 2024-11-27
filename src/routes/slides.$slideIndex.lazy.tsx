import React from "react";
import { createLazyFileRoute, Link, notFound } from "@tanstack/react-router";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import Button, { button } from "../components/button";
import useUserAnswersStore from "../store";
import Footer from "../components/footer";

const slides = data.slides;

export const Route = createLazyFileRoute("/slides/$slideIndex")({
  component: Index,
});

function Index() {
  const { userAnswers } = useUserAnswersStore();

  const slideIndex = Number(Route.useParams().slideIndex);

  const currentSlide = slides.find(
    (slide) => slide.index === Number(slideIndex)
  );

  if (!currentSlide) {
    throw notFound();
  }

  const hasCurrentQuestionBeenAnswered = !!userAnswers.hasOwnProperty(
    currentSlide.question
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
          questionIndex={slideIndex}
          maxQuestions={slides.length}
        />
      </div>
      <Footer>
        <Link to={`/slides/${slideIndex - 1}`} disabled={slideIndex === 1}>
          <Button
            className={button({
              intent: "secondary",
              className: "w-1/2 sm:w-auto justify-center",
            })}
            disabled={slideIndex === 1}
          >
            Back
          </Button>
        </Link>
        <Link
          to={
            slideIndex === slides.length
              ? "/assessment-complete"
              : `/slides/${slideIndex + 1}`
          }
          disabled={!hasCurrentQuestionBeenAnswered}
        >
          <Button
            className={button({
              intent: "primary",
              className: "w-1/2 sm:w-auto justify-center",
            })}
            disabled={!hasCurrentQuestionBeenAnswered}
          >
            Continue
          </Button>
        </Link>
      </Footer>
    </div>
  );
}
