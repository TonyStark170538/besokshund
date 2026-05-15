import { useEffect, useState } from "react";

interface DogCharacterProps {
  emoji: string;
  speed?: number;
  height?: string;
}

export function AnimatedDogCharacter({ emoji, speed = 8, height = "h-24" }: DogCharacterProps) {
  const [animation, setAnimation] = useState("walking");

  useEffect(() => {
    const animations = ["walking", "running", "playing", "eating"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % animations.length;
      setAnimation(animations[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const animationStyles = `
    @keyframes dogWalking {
      0% { left: -5%; transform: scaleX(1); }
      100% { left: 105%; transform: scaleX(1); }
    }
    @keyframes dogRunning {
      0% { left: -5%; transform: scaleX(1); }
      100% { left: 105%; transform: scaleX(1); }
    }
    @keyframes dogPlaying {
      0% { left: 20%; transform: scaleX(1) translateY(0); }
      25% { transform: scaleX(1) translateY(-10px); }
      50% { left: 50%; transform: scaleX(1) translateY(0); }
      75% { transform: scaleX(1) translateY(-10px); }
      100% { left: 80%; transform: scaleX(1) translateY(0); }
    }
    @keyframes dogEating {
      0% { left: 45%; transform: scaleX(1); }
      50% { transform: scaleX(1) translateY(2px); }
      100% { left: 45%; transform: scaleX(1); }
    }
    @keyframes ballBounce {
      0% { left: 20%; top: 20px; }
      25% { left: 40%; top: -10px; }
      50% { left: 60%; top: 20px; }
      75% { left: 80%; top: -10px; }
      100% { left: 100%; top: 20px; }
    }
    @keyframes foodAppear {
      0% { opacity: 1; transform: translateY(0); }
      50% { opacity: 0.5; transform: translateY(-5px); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
    @keyframes subtleFloat {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.05; }
      50% { transform: translateY(-15px) rotate(5deg); opacity: 0.1; }
    }
  `;

  const getAnimationDuration = () => {
    switch (animation) {
      case "running":
        return `${speed * 0.6}s`;
      case "walking":
        return `${speed}s`;
      case "playing":
        return "6s";
      case "eating":
        return "3s";
      default:
        return "8s";
    }
  };

  const getAnimationName = () => {
    switch (animation) {
      case "running":
        return "dogRunning";
      case "walking":
        return "dogWalking";
      case "playing":
        return "dogPlaying";
      case "eating":
        return "dogEating";
      default:
        return "dogWalking";
    }
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div className={`relative w-full ${height} bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-lg overflow-hidden flex items-center`}>
        <div
          className="absolute text-5xl"
          style={{
            animation: `${getAnimationName()} ${getAnimationDuration()} linear infinite`,
          }}
        >
          {emoji}
        </div>

        {/* Ball for playing animation */}
        {animation === "playing" && (
          <div
            className="absolute text-2xl"
            style={{
              animation: `ballBounce 6s ease-in-out infinite`,
            }}
          >
            ⚽
          </div>
        )}

        {/* Food for eating animation */}
        {animation === "eating" && (
          <div
            className="absolute text-2xl"
            style={{
              left: "50%",
              animation: `foodAppear 3s ease-in-out infinite`,
            }}
          >
            🦴
          </div>
        )}
      </div>
    </>
  );
}

export function SubtlePawPrints() {
  const pawPrints = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <>
      <style>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.05; }
          50% { transform: translateY(-15px) rotate(5deg); opacity: 0.1; }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        {pawPrints.map((paw) => (
          <div
            key={paw.id}
            className="absolute text-xl"
            style={{
              left: `${paw.left}%`,
              top: `${paw.top}%`,
              animation: `subtleFloat ${paw.duration}s infinite ease-in-out`,
              animationDelay: `${paw.delay}s`,
            }}
          >
            🐾
          </div>
        ))}
      </div>
    </>
  );
}
