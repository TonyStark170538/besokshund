export interface QuizQuestion {
  id: string;
  question: string;
  answers: {
    text: string;
    scores: {
      elvis: number;
      sunny: number;
      ringo: number;
    };
  }[];
}

export interface QuizResult {
  dogId: "elvis" | "sunny" | "ringo";
  dogName: string;
  match: number;
  message: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "What kind of energy level do you prefer?",
    answers: [
      {
        text: "High energy and playful",
        scores: { elvis: 10, sunny: 2, ringo: 5 },
      },
      {
        text: "Calm and relaxing",
        scores: { elvis: 2, sunny: 10, ringo: 5 },
      },
      {
        text: "Balanced and adaptable",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q2",
    question: "Who will be interacting with the therapy dog?",
    answers: [
      {
        text: "Active children",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Elderly or senior adults",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Mixed age groups",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q3",
    question: "What is your primary goal?",
    answers: [
      {
        text: "Build confidence and engagement",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Provide comfort and emotional support",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Flexible support for various needs",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q4",
    question: "What type of activities interest you?",
    answers: [
      {
        text: "Interactive games and active play",
        scores: { elvis: 10, sunny: 2, ringo: 5 },
      },
      {
        text: "Quiet companionship and relaxation",
        scores: { elvis: 2, sunny: 10, ringo: 5 },
      },
      {
        text: "Varied activities based on mood",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q5",
    question: "How would you describe your personality?",
    answers: [
      {
        text: "Outgoing and enthusiastic",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Calm and introspective",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Flexible and adaptable",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
];

export function calculateQuizResult(scores: {
  elvis: number;
  sunny: number;
  ringo: number;
}): QuizResult {
  const total = scores.elvis + scores.sunny + scores.ringo;
  const maxScore = Math.max(scores.elvis, scores.sunny, scores.ringo);

  let dogId: "elvis" | "sunny" | "ringo";
  let dogName: string;
  let message: string;

  if (scores.elvis === maxScore && scores.elvis > scores.sunny && scores.elvis > scores.ringo) {
    dogId = "elvis";
    dogName = "Elvis";
    message =
      "You're a perfect match for Elvis! Your energetic spirit and enthusiasm align perfectly with Elvis's playful nature. Together, you'll create joyful, engaging experiences that bring smiles and confidence to everyone around you.";
  } else if (scores.sunny === maxScore && scores.sunny > scores.elvis && scores.sunny > scores.ringo) {
    dogId = "sunny";
    dogName = "Sunny";
    message =
      "Sunny is your ideal companion! Your calm, compassionate nature complements Sunny's gentle spirit. Together, you'll create peaceful, supportive moments that bring comfort and emotional connection to those who need it most.";
  } else {
    dogId = "ringo";
    dogName = "Ringo";
    message =
      "Ringo is your perfect match! Your balanced, adaptable approach pairs beautifully with Ringo's versatile nature. Together, you'll navigate diverse situations with grace, bringing the right energy and support to every person you meet.";
  }

  const matchPercentage = Math.round((maxScore / (total / 3)) * 100);

  return {
    dogId,
    dogName,
    match: Math.min(matchPercentage, 100),
    message,
  };
}
