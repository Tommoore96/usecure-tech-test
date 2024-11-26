import { create } from "zustand";
import { data } from "./db";
import { devtools } from "zustand/middleware";

type SelectedAnswer = { answerId: string; correct: boolean };

type UserAnswersState = {
  userAnswers: Record<string, SelectedAnswer>;
  setAnswer: ({
    question,
    answerId,
    correct,
  }: {
    question: string;
    answerId: string;
    correct: boolean;
  }) => void;
  questions: { question: string; id: number }[];
  currentSlide: number;
  previouseSlide: () => void;
  nextSlide: () => void;
  resetAnswers: () => void;
};

const useUserAnswersStore = create<UserAnswersState>()(
  devtools((set) => ({
    userAnswers: {}, // Initial state: no answers selected
    setAnswer: ({ question, answerId, correct }) =>
      set((state) => ({
        userAnswers: {
          ...state.userAnswers,
          [question]: { answerId, correct }, // Update the specific question's answer
        },
      })),
    resetAnswers: () =>
      set({
        userAnswers: {},
      }),
    currentSlide: 0,
    /**
     * reduces the current slide index by 1
     * @returns void
     */
    previouseSlide: () =>
      set((state) => ({ currentSlide: state.currentSlide - 1 })),
    /**
     * increases the current slide index by 1
     * @returns void
     */
    nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
    questions: data.slides
      .filter((slide) => slide.type === "question")
      .map((slide, index) => ({ question: slide.question, id: index + 1 })),
  }))
);

export default useUserAnswersStore;
