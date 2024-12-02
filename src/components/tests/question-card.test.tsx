import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuestionCard, { QuestionCardProps } from "../question-card";

const DEFAULT_PROPS: QuestionCardProps = {
  question: "What is the best testing library?",
  answers: [
    {
      id: "1",
      text: "React Testing Library",
      correct: true,
    },
    {
      id: "2",
      text: "Enzyme",
      correct: false,
    },
  ],
  questionIndex: 1,
  maxQuestions: 1,
  formId: "test-form",
  onChange: () => {},
};

describe("The QuestionCard component", () => {
  test("renders the correct information in it's default state", () => {
    render(<QuestionCard {...DEFAULT_PROPS} />);

    expect(screen.getByText("1/1")).toBeInTheDocument();

    expect(screen.getByText(DEFAULT_PROPS.question)).toBeInTheDocument();

    DEFAULT_PROPS.answers.forEach((answer) => {
      expect(screen.getByText(answer.text)).toBeInTheDocument();
    });
  });

  describe("renders the correct text underneath answers once the", () => {
    test("correct answer has been submitted", async () => {
      const PROPS = {
        ...DEFAULT_PROPS,
        submittedAnswer: { answerId: "1", correct: true },
      };

      render(<QuestionCard {...PROPS} />);

      const correctAnswer = screen.getByText("React Testing Library");

      const correctAnswerParent = correctAnswer.closest("div");

      expect(
        within(correctAnswerParent).getByText(
          "Correct. This is the correct option to select"
        )
      ).toBeInTheDocument();
    });

    test("incorrect answer has been submitted", async () => {
      const PROPS = {
        ...DEFAULT_PROPS,
        submittedAnswer: { answerId: "2", correct: false },
      };

      render(<QuestionCard {...PROPS} />);

      const incorrectAnswer = screen.getByText("Enzyme");

      const incorrectAnswerParent = incorrectAnswer.closest("div");

      expect(
        within(incorrectAnswerParent).getByText(
          "Incorrect. This is not the correct answer"
        )
      ).toBeInTheDocument();

      const correctAnswer = screen.getByText("React Testing Library");

      const correctAnswerParent = correctAnswer.closest("div");

      expect(
        within(correctAnswerParent).getByText(
          "This was the correct answer: This is why"
        )
      ).toBeInTheDocument();
    });
  });
});
