import {
  Heart,
  BookOpen,
  Users,
  Users2,
  User,
  Building2,
  LucideIcon,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Heart,
  BookOpen,
  Users,
  Users2,
  User,
  Building2,
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon] || Heart;

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Icon */}
      <div className="mb-6 inline-flex p-4 rounded-full bg-accent/10">
        <Icon size={32} className="text-accent" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
}
