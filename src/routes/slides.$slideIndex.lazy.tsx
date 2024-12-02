import React, { useEffect } from "react";
import { createLazyFileRoute, Link, notFound } from "@tanstack/react-router";
import ChevronLeft from "../assets/icons/chevron-left.svg?react";
import ChevronRight from "../assets/icons/chevron-right.svg?react";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import Button, { button } from "../components/button";
import useUserAnswersStore from "../store";
import Footer from "../components/footer";

const slides = data.slides;

const QUESTION_FORM_ID = "question-form";

export const Route = createLazyFileRoute("/slides/$slideIndex")({
  component: Index,
});

function Index() {
  const { submittedAnswers } = useUserAnswersStore();
  const [optionSelected, setOptionSelected] = React.useState(false);

  const slideIndex = Number(Route.useParams().slideIndex);

  useEffect(() => {
    setOptionSelected(false);
  }, [slideIndex]);

  const currentSlide = slides.find(
    (slide) => slide.index === Number(slideIndex)
  );

  if (!currentSlide) {
    throw notFound();
  }

  const hasCurrentQuestionBeenAnswered = !!submittedAnswers.hasOwnProperty(
    currentSlide.question
  );

  return (
    <div className="flex flex-1 flex-col h-full ">
      <div className="flex flex-1 flex-col justify-start md:justify-center pt-12 md:pt-0 px-4 sm:px-12 md:px-16 w-full md:-mt-10">
        <QuestionCard
          key={currentSlide.question}
          className="self-center"
          question={currentSlide.question}
          answers={currentSlide.answers}
          questionIndex={slideIndex}
          maxQuestions={slides.length}
          formId={QUESTION_FORM_ID}
          onChange={() => setOptionSelected(true)}
        />
      </div>
      <Footer>
        <Link
          to={`/slides/${slideIndex - 1}`}
          disabled={slideIndex === 1}
          className="w-1/2 sm:w-auto"
        >
          <Button
            className="sm:w-auto justify-center w-full"
            intent="secondary"
            disabled={slideIndex === 1}
          >
            <ChevronLeft /> Back
          </Button>
        </Link>
        {hasCurrentQuestionBeenAnswered ? (
          <Link
            to={
              slideIndex === slides.length
                ? "/assessment-complete"
                : `/slides/${slideIndex + 1}`
            }
            disabled={!hasCurrentQuestionBeenAnswered}
            className="w-1/2 sm:w-auto"
          >
            <Button
              className="sm:w-auto justify-center w-full"
              intent="primary"
              disabled={!hasCurrentQuestionBeenAnswered}
            >
              Continue <ChevronRight />
            </Button>
          </Link>
        ) : (
          <Button
            type="submit"
            form={QUESTION_FORM_ID}
            disabled={!optionSelected}
            intent={"primary"}
            className="sm:w-auto justify-center w-1/2"
          >
            Submit
          </Button>
        )}
      </Footer>
    </div>
  );
}
