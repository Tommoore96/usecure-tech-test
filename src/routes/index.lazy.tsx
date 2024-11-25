import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import classNames from "classnames";
import { cn } from "../utils/cn";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="pt-12 md:p-0 flex p-auto justify-center h-full">
      {data.slides.map((slide, index) => (
        <div
          key={slide.question}
          className={cn({ hidden: currentSlide !== index }, "m-auto")}
        >
          <QuestionCard
            number={index + 1}
            question={slide.question}
            answers={slide.answers}
          />
        </div>
      ))}
    </div>
  );
}
