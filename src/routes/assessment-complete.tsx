import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import background from "../assets/background.svg";
import useUserAnswersStore from "../store";

export const Route = createFileRoute("/assessment-complete")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userAnswers, questions } = useUserAnswersStore();

  const correctAnswersStatistic = Object.values(userAnswers).filter(
    (answer) => answer.correct
  ).length;

  const percentageScoreStatistic = Math.round(
    (correctAnswersStatistic / questions.length) * 100
  );

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-1 justify-start flex-col pt-24 px-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="gap-9.5 flex flex-col">
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
