export type Slide = {
  index: number;
  type: "question";
  question: string;
  answers: { id: string; text: string; correct: boolean }[];
};

type Data = { title: string; slides: Slide[] };

export const data: Data = {
  title: "A Cyber Security Course",
  slides: [
    {
      index: 1,
      type: "question",
      question: "What is a risk involved in sharing files?",
      answers: [
        {
          id: "10d5ea99-611e-4548-8bfa-f88d95a9f22e",
          text: "Sensitive information could become exposed",
          correct: true,
        },
        {
          id: "ec140597-5ba7-4cb9-9977-6be620f02336",
          text: "The receiving machine could run out of disk space causing it to spontaneously combust",
          correct: false,
        },
      ],
    },
    {
      index: 2,
      type: "question",
      question: "What does the acronym VPN stand for?",
      answers: [
        {
          id: "e25dd8c9-11fc-410d-b2f2-32a67ea819e6",
          text: "Visually Protruding Node",
          correct: false,
        },
        {
          id: "cbf1ce67-8059-4059-b7b6-6f5dfd16b547",
          text: "Value Project Nothing",
          correct: false,
        },
        {
          id: "63200559-e405-4d47-a495-bf66de949cca",
          text: "Virtual Private Network",
          correct: true,
        },
      ],
    },
    {
      index: 3,
      type: "question",
      question:
        "What is a measure that can be taken to increase security on a machine?",
      answers: [
        {
          id: "a5710a46-8702-46f4-bfed-5b740ad380a2",
          text: "Submerge it in water",
          correct: false,
        },
        {
          id: "3b4bba1a-c9aa-4337-ae72-e48c4d0f85b2",
          text: "Set a strong password on the machine",
          correct: true,
        },
        {
          id: "a1ca79e3-8632-46d1-968a-59c5df26272c",
          text: "Turn it off and on again",
          correct: false,
        },
      ],
    },
  ],
};
