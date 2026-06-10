import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  dog: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  dog,
}: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="fill-accent text-accent"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-accent font-medium mt-2">
          Om {dog}
        </p>
      </div>
    </div>
  );
}
