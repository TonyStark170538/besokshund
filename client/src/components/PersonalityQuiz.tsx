import { useState } from "react";
import { Button } from "@/components/ui/button";
import { quizQuestions, calculateQuizResult, type QuizResult } from "@/lib/quizData";
import { ChevronRight, RotateCcw } from "lucide-react";

export function PersonalityQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ elvis: 0, sunny: 0, ringo: 0 });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const answer = quizQuestions[currentQuestion].answers[answerIndex];
    const newScores = {
      elvis: scores.elvis + answer.scores.elvis,
      sunny: scores.sunny + answer.scores.sunny,
      ringo: scores.ringo + answer.scores.ringo,
    };
    setScores(newScores);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalResult = calculateQuizResult(newScores);
      setResult(finalResult);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScores({ elvis: 0, sunny: 0, ringo: 0 });
    setResult(null);
    setIsStarted(false);
  };

  const getDogColor = (dogId: string) => {
    switch (dogId) {
      case "elvis":
        return "#2C2C2C";
      case "sunny":
        return "#8B3A1F";
      case "ringo":
        return "#8B6F47";
      default:
        return "#8B5A3C";
    }
  };

  if (!isStarted) {
    return (
      <div className="text-center py-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Hitta din perfekta matchning
        </h3>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Ta vår snabba personlighetstest för att hitta vilken terapihund som är den bästa matchningen för dina behov och personlighet. Svara på 5 enkla frågor och få personliga rekommendationer!
        </p>
        <Button
          onClick={() => setIsStarted(true)}
          className="btn-primary text-lg px-8 py-6"
        >
          Starta frågesporten
        </Button>
      </div>
    );
  }

  if (result) {
    const resultColor = getDogColor(result.dogId);

    return (
      <div className="space-y-8">
        {/* Result Header */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Din perfekta match!
          </h3>
          <p className="text-lg text-foreground/70">
            Baserat på dina svar, här är din personliga rekommendation:
          </p>
        </div>

        {/* Result Card */}
        <div
          className="rounded-3xl p-8 md:p-12 border-4 shadow-lg"
          style={{
            backgroundColor:
              result.dogId === "elvis"
                ? "#F5F5F5"
                : result.dogId === "sunny"
                  ? "#FFF0E6"
                  : "#F5E6D3",
            borderColor: resultColor,
          }}
        >
          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: resultColor }}
            >
              {result.dogName}
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: resultColor }}
              />
              <span
                className="text-2xl font-bold"
                style={{ color: resultColor }}
              >
                {result.match}% Match
              </span>
              <div
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: resultColor }}
              />
            </div>
          </div>

          {/* Match Bar */}
          <div className="mb-8">
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${result.match}%`,
                  backgroundColor: resultColor,
                }}
              />
            </div>
          </div>

          {/* Message */}
          <p className="text-lg leading-relaxed text-center mb-8 text-foreground">
            {result.message}
          </p>

          {/* CTA */}
          <div className="text-center">
            <a href="#contact" className="btn-primary inline-block">
              Boka en session med {result.dogName}
            </a>
          </div>
        </div>

        {/* Restart Button */}
        <div className="text-center">
          <Button
            onClick={handleRestart}
            variant="outline"
            className="btn-outline"
          >
            <RotateCcw size={18} className="mr-2" />
            Ta quiz igen
          </Button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-foreground/70">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-semibold text-accent">
            {progress.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          {question.question}
        </h3>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 md:p-5 rounded-2xl border-2 border-border text-left transition-all duration-200 hover:border-accent hover:bg-accent hover:bg-opacity-10 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground group-hover:text-accent">
                  {answer.text}
                </span>
                <ChevronRight
                  size={20}
                  className="text-border group-hover:text-accent transition-colors"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={handleRestart}
          className="text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          Starta om
        </button>
        <span className="text-sm font-medium text-foreground/70">
          {currentQuestion + 1}/{quizQuestions.length}
        </span>
      </div>
    </div>
  );
}
