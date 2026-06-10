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
    question: "Vilken energinivå på hunden föredrar du?",
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
    question: "Hur skulle du beskriva personligheten på den som träffar hunden?",
    answers: [
      {
        text: "Energisk och entusiastisk",
        scores: { elvis: 10, sunny: 3, ringo: 6 },
      },
      {
        text: "Lugn och i behov av socialt samspel med hund och andra",
        scores: { elvis: 2, sunny: 10, ringo: 6 },
      },
      {
        text: "Flexible and anpassningsbar, gärna promenader",
        scores: { elvis: 5, sunny: 7, ringo: 10 },
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
      "Elvis är en perfekt match för er! Er energi passar perfekt ihop med Elvis lekfulla natur. Tillsammans skapar ni glädjefyllda och engagerande upplevelser som väcker leenden och självförtroende hos alla omkring er.";
  } else if (scores.sunny === maxScore && scores.sunny > scores.elvis && scores.sunny > scores.ringo) {
    dogId = "sunny";
    dogName = "Sunny";
    message =
      "Sunny låter som den perfekta följeslagaren! Med hennes lugna, inkännande natur kommer ni tillsammans skapa fridfulla, stödjande stunder som ger tröst och känslomässig kontakt med dem som behöver det mest.";
  } else {
    dogId = "ringo";
    dogName = "Ringo";
    message =
      "Ringo passar er perfek! Hans balanserade och anpassningsbara inställning och mångsidiga natur kommer tillsammans med er att navigera fram i olika situationer med elegans och ge rätt energi och stöd till varje person ni möter.";
  }

  const matchPercentage = Math.round((maxScore / (total / 3)) * 100);

  return {
    dogId,
    dogName,
    match: Math.min(matchPercentage, 100),
    message,
  };
}
