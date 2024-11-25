import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import QuestionCard from "../components/question-card";
import { data } from "../db";
import { cn } from "../utils/cn";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-1 flex-col justify-start md:justify-center pt-12 md:pt-0">
        {data.slides.map((slide, index) => (
          <QuestionCard
            key={slide.question}
            className={cn({ hidden: currentSlide !== index }, "self-center")}
            number={index + 1}
            question={slide.question}
            answers={slide.answers}
          />
        ))}
      </div>
      <div className="justify-self-end">
        <button>Back</button>
      </div>
    </div>
  );
}
