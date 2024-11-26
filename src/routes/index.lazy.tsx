import React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import { cn } from "../utils/cn";
import Button from "../components/button";
import useUserAnswersStore from "../store";
import ButtonGroup from "../components/button-group";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { currentSlide, nextSlide, previouseSlide, questions, userAnswers } =
    useUserAnswersStore();

  const navigate = useNavigate();

  const onClickContinue = () => {
    if (questions.length > currentSlide + 1) {
      nextSlide();
    } else {
      navigate({ to: "/assessment-complete" });
    }
  };

  const hasCurrentQuestionBeenAnswered = !!userAnswers.hasOwnProperty(
    questions[currentSlide].question
  );

  return (
    <div className="flex flex-1 flex-col h-full ">
      <div className="flex flex-1 flex-col justify-start md:justify-center pt-12 md:pt-0 px-4 sm:px-12">
        {data.slides.map((slide, index) => (
          <QuestionCard
            key={slide.question}
            className={cn({ hidden: currentSlide !== index }, "self-center")}
            question={slide.question}
            answers={slide.answers}
          />
        ))}
      </div>
      <div className="justify-self-end flex justify-between items-center border-t-1 border-neutral w-full h-18 md:h-20 px-4 md:px-8 gap-2">
        <Button
          intent={"secondary"}
          onClick={previouseSlide}
          disabled={currentSlide === 1}
          className="w-1/2 sm:w-auto justify-center"
        >
          Back
        </Button>
        <Button
          intent={"primary"}
          onClick={onClickContinue}
          disabled={!hasCurrentQuestionBeenAnswered}
          className="w-1/2 sm:w-auto justify-center"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
