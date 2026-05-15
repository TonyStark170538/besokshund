import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2026 Besökshund. Alla rättigheter förbehållna. Tillverkad med {" "}
            <Heart size={14} className="inline text-accent" /> för terapihundar.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">
              Integritetspolicy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Användarvillkor
            </a>
          </div>
        </div>
    </footer>
  );
}
