import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuestionCard, { QuestionCardProps } from "../question-card";

describe("The QuestionCard component", () => {
  test("should render the correct information", () => {
    const PROPS: QuestionCardProps = {
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

    render(<QuestionCard {...PROPS} />);

    expect(screen.getByText(PROPS.question)).toBeInTheDocument();

    PROPS.answers.forEach((answer) => {
      expect(screen.getByText(answer.text)).toBeInTheDocument();
    });
  });
});
