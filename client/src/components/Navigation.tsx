import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

const navLinks = [
  { label: "Hem", href: "#" },
  { label: "Hundar", href: "#dogs" },
  { label: "Quiz", href: "#quiz" },
  { label: "Tjänster", href: "#services" },
  { label: "Kontakta", href: "#contact" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="Besökshund logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">
            Besökshund
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-accent transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent rounded">
            Boka nu
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-foreground hover:text-accent transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary block text-center">
              Boka nu
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
