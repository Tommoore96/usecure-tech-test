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
  currentSlide: number;
  previouseSlide: () => void;
  nextSlide: () => void;
  resetAnswers: () => void;
  totalQuestions: number;
};

const useUserAnswersStore = create<UserAnswersState>()(
  devtools((set) => ({
    userAnswers: {}, // Initial state: no answers selected
    totalQuestions: data.slides.filter((slide) => slide.type === "question")
      .length,
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
    currentSlide: 1,
    previouseSlide: () =>
      set((state) => ({ currentSlide: state.currentSlide - 1 })),
    nextSlide: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
  }))
);

export default useUserAnswersStore;
