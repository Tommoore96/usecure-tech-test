import { create } from "zustand";
import { devtools } from "zustand/middleware";

type SelectedAnswer = { answerId: string; correct: boolean };

type UserAnswersState = {
  submittedAnswers: Record<string, SelectedAnswer>;
  setAnswer: ({
    question,
    answerId,
    correct,
  }: {
    question: string;
    answerId: string;
    correct: boolean;
  }) => void;
  resetAnswers: () => void;
};

const useUserAnswersStore = create<UserAnswersState>()(
  devtools((set) => ({
    submittedAnswers: {}, // Initial state: no answers selected
    setAnswer: ({ question, answerId, correct }) =>
      set((state) => ({
        submittedAnswers: {
          ...state.submittedAnswers,
          [question]: { answerId, correct }, // Update the specific question's answer
        },
      })),
    resetAnswers: () =>
      set({
        submittedAnswers: {},
      }),
  }))
);

export default useUserAnswersStore;
