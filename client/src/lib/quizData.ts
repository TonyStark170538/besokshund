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
        text: "Öka självförtroende och socialt engagemang",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Ge tröst och emotionell support",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Olika aktiviteter och flexibilitet utifrån det individuella behovet",
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
        text: "Energisk och entusiastisk",
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
      "Du är en perfekt matchning för Elvis! Din energiska anda och entusiasm passar perfekt ihop med Elvis lekfulla natur. Tillsammans skapar ni glädjefyllda och engagerande upplevelser som väcker leenden och självförtroende hos alla omkring dig.";
  } else if (scores.sunny === maxScore && scores.sunny > scores.elvis && scores.sunny > scores.ringo) {
    dogId = "sunny";
    dogName = "Sunny";
    message =
      "Sunny är din perfekta följeslagare! Din lugna, medkännande natur kompletterar Sunnys milda anda. Tillsammans skapar ni fridfulla, stödjande stunder som ger tröst och känslomässig kontakt till dem som behöver det mest.";
  } else {
    dogId = "ringo";
    dogName = "Ringo";
    message =
      "Ringo är din perfekta matchning! Din balanserade och anpassningsbara inställning passar utmärkt ihop med Ringos mångsidiga natur. Tillsammans kommer ni att navigera i olika situationer med elegans och ge rätt energi och stöd till varje person ni möter.";
  }

  const matchPercentage = Math.round((maxScore / (total / 3)) * 100);

  return {
    dogId,
    dogName,
    match: Math.min(matchPercentage, 100),
    message,
  };
}
