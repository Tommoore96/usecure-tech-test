import * as React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import background from "../assets/background.svg";
import useUserAnswersStore from "../store";
import { data } from "../db";
import Button from "../components/button";

export const Route = createLazyFileRoute("/assessment-complete")({
  component: RouteComponent,
});

function RouteComponent() {
  const { submittedAnswers } = useUserAnswersStore();

  const correctAnswersStatistic = Object.values(submittedAnswers).filter(
    (answer) => answer.correct
  ).length;

  const percentageScoreStatistic = Math.round(
    (correctAnswersStatistic / data.slides.length) * 100
  );

  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-1 justify-start flex-col pt-24 px-6 items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="gap-9.5 flex flex-col max-w-[348px]">
        <h1 className="whitespace-pre-line text-h2 font-bold text-center">
          Great work, <br />
          you passed!
        </h1>
        <div className="flex justify-around gap-5">
          <Statistic
            statistic={percentageScoreStatistic + "%"}
            detail="90% required"
          />
          <Statistic
            statistic={correctAnswersStatistic}
            detail="Answered correctly"
          />
        </div>
      </div>
      <Button
        intent={"primary"}
        onClick={() => {
          useUserAnswersStore.getState().resetAnswers();
          navigate({ to: "/slides/1" });
        }}
        className="fixed bottom-6 right-6"
      >
        Restart
      </Button>
    </div>
  );
}

function Statistic({
  statistic,
  detail,
}: {
  statistic: string | number;
  detail: string | number;
}) {
  return (
    <dl className="flex items-center flex-col">
      <dd className="text-h4 font-bold">{statistic}</dd>
      <dt className="text-neutral-tertiary">{detail}</dt>
    </dl>
  );
}
