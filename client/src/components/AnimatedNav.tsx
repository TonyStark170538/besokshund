export function AnimatedNav() {
  return (
    <div className="relative h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent overflow-hidden">
      <div
        className="absolute h-full w-8 flex items-center justify-center text-xl"
        style={{
          animation: "slideNav 8s infinite ease-in-out",
          background: "linear-gradient(90deg, transparent, rgba(139, 90, 60, 0.3), transparent)",
        }}
      >
        🐕
      </div>
      <style>{`
        @keyframes slideNav {
          0% {
            left: -5%;
          }
          50% {
            left: 50%;
          }
          100% {
            left: 105%;
          }
        }
      `}</style>
    </div>
  );
}
