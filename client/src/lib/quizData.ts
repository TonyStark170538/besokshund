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
    question: "Vilken energinivå på hundenföredrar du?",
    answers: [
      {
        text: "Hög energi och lekfull",
        scores: { elvis: 10, sunny: 2, ringo: 5 },
      },
      {
        text: "Lugn och avslappnad",
        scores: { elvis: 2, sunny: 10, ringo: 5 },
      },
      {
        text: "Balanserad och anpassningsbar",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q2",
    question: "Vilka kommer att interagera med hunden?",
    answers: [
      {
        text: "Högaktiva barn",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Vuxna eller åldrade personer",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Blandade åldersgrupper",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q3",
    question: "Vad är ditt primära mål?",
    answers: [
      {
        text: "öka självförtroende och socialt engagemang",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Ge tröst och emotionell support",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "olika aktiviteter och flexibilitet utifrån det iindividuella behovet",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q4",
    question: "Vilka typer av aktiviteter intresserar dig?",
    answers: [
      {
        text: "Interaktiva spel och aktiv lek",
        scores: { elvis: 10, sunny: 2, ringo: 5 },
      },
      {
        text: "Lugnt och avslappnande umgänge tillsammans med hunden",
        scores: { elvis: 2, sunny: 10, ringo: 5 },
      },
      {
        text: "Varierade aktiviteter beroende på humör",
        scores: { elvis: 5, sunny: 5, ringo: 10 },
      },
    ],
  },
  {
    id: "q5",
    question: "Hur skulle du beskriva din personlighet?",
    answers: [
      {
        text: "energisk och entusiastisk",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Lugn och insiktsfull",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Flexible and anpassningsbar",
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
