import { Heart } from "lucide-react";

interface DogCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;
  personality: string[];
  idealFor: string[];
  color: string;
  accentColor: string;
  bgColor?: string;
  borderColor?: string;
}

export function DogCard({
  id,
  name,
  title,
  description,
  avatar,
  personality,
  idealFor,
  color,
  accentColor,
  bgColor,
  borderColor,
}: DogCardProps) {
  return (
    <div
      className="dog-card group border-4 relative overflow-hidden"
      style={{
        backgroundColor: bgColor || "#F9F3EB",
        borderColor: borderColor || color,
      }}
    >
      {/* Avatar Section */}
      <div className="flex justify-center mb-6">
        <div
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4"
          style={{ borderColor: color, backgroundColor: accentColor }}
        >
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dog Info */}
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color }}>
          {name}
        </h3>
        <p className="text-lg font-medium" style={{ color: color + "99" }}>
          {title}
        </p>
      </div>

      {/* Description */}
      <p className="text-center mb-6 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Personality Tags */}
      <div className="mb-6">
        <p className="text-xs font-bold mb-3 uppercase tracking-wide" style={{ color }}>
          Personlighet
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {personality.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all duration-300"
              style={{
                backgroundColor: `${color}15`,
                color: color,
                borderColor: color,
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Ideal For */}
      <div className="pb-0 border-t-2" style={{ borderColor: color + "30" }}>
        <p className="text-xs font-bold mt-4 mb-3 uppercase tracking-wide" style={{ color }}>
          Idealisk för
        </p>
        <ul className="space-y-2">
          {idealFor.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs md:text-sm">
              <Heart
                size={14}
                className="mt-1 flex-shrink-0"
                style={{ color }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
