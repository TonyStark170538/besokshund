import { useEffect, useState } from "react";

export function AnimatedPaws() {
  const [paws, setPaws] = useState<
    Array<{ id: number; left: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate random paw prints
    const newPaws = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setPaws(newPaws);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute text-4xl opacity-20 animate-bounce"
          style={{
            left: `${paw.left}%`,
            top: `${Math.random() * 80}%`,
            animation: `float 6s infinite ease-in-out`,
            animationDelay: `${paw.delay}s`,
          }}
        >
          🐾
        </div>
      ))}
    </div>
  );
}

export function RunningDog() {
  return (
    <div className="relative h-20 overflow-hidden bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-lg mb-8">
      <div
        className="absolute text-5xl animate-pulse"
        style={{
          animation: "runningDog 4s infinite linear",
          left: "-10%",
        }}
      >
        🐕
      </div>
      <style>{`
        @keyframes runningDog {
          0% {
            left: -10%;
          }
          100% {
            left: 110%;
          }
        }
      `}</style>
    </div>
  );
}

export function FloatingPawPrints() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-10"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 5}%`,
            animation: `float 8s infinite ease-in-out`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          🐾
        </div>
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

export function PawPrintTrail() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.08 }}
    >
      <defs>
        <pattern id="pawPattern" x="0" y="0" width="100" height="100">
          <text x="10" y="50" fontSize="40" fill="currentColor">
            🐾
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pawPattern)" />
    </svg>
  );
}
