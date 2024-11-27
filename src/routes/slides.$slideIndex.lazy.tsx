import React, { useEffect } from "react";
import { createLazyFileRoute, Link, notFound } from "@tanstack/react-router";
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
      <div className="flex flex-1 flex-col justify-start md:justify-center pt-12 md:pt-0 px-4 sm:px-12">
        <QuestionCard
          currentQuestion={slideIndex}
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
        <Link to={`/slides/${slideIndex - 1}`} disabled={slideIndex === 1}>
          <Button
            className="w-1/2 sm:w-auto justify-center"
            intent="secondary"
            disabled={slideIndex === 1}
          >
            Back
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
          >
            <Button
              className="w-1/2 sm:w-auto justify-center"
              intent="primary"
              disabled={!hasCurrentQuestionBeenAnswered}
            >
              Continue
            </Button>
          </Link>
        ) : (
          <Button
            type="submit"
            form={QUESTION_FORM_ID}
            disabled={!optionSelected}
            intent={"primary"}
          >
            Submit
          </Button>
        )}
      </Footer>
    </div>
  );
}
