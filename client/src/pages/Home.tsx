import { Heart, Users, Users2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DogCard } from "@/components/DogCard";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactForm } from "@/components/ContactForm";
import { PersonalityQuiz } from "@/components/PersonalityQuiz";
import { dogs, services, testimonials, faqs } from "@/lib/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* Hero Section with Video */}
      <section id="home" className="pt-24 pb-0 relative overflow-hidden">
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-card">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/kLOV4DfveOc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* About Marie Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Om Marie
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Marie är certifierad skol-,terapi-och besökshundsteam tillsammans med Ringo, och har arbetat med honom sedan 2019, inom skola, vård och omsorg. Hennes passion för djurassisterad terapi och seriösa engagemang för välmående har påverkat många under dessa år.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Med Elvis, Sunny och Ringo vid sin sida, skapar Marie trygga, sköna rum där människor kan uppleva den helande kraften i människa-djur relationer. Varje hund är noggrant utvald, utförligt tränad och temperamentstestad för att säkerställa bästa kvalitet.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm font-medium text-foreground/70">År Erfarenhet</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">✓</div>
                  <div className="text-sm font-medium text-foreground/70">Certifierad hanterare</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663526201017/Nv66AfvEoMtUdNgZMyJxs4/hero-marie-dogs.png"
                alt="Marie with therapy dogs"
                className="rounded-3xl shadow-soft-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Dogs Section */}
      <section id="dogs" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Möt hundarna
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Varje hund bidrar med unika gåvor och personligheter i sitt arbete. Upptäck vad som gör Elvis, Sunny och Ringo speciella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dogs.map((dog, index) => {
              let bgColor = "#F9F3EB";
              let borderColor = dog.color;
              
              if (dog.id === "elvis") {
                bgColor = "#F5F5F5";
                borderColor = "#2C2C2C";
              } else if (dog.id === "sunny") {
                bgColor = "#FFF0E6";
                borderColor = "#8B3A1F";
              } else if (dog.id === "ringo") {
                bgColor = "#F5E6D3";
                borderColor = "#8B6F47";
              }
              
              return (
                <div key={dog.id}>
                  <DogCard {...dog} bgColor={bgColor} borderColor={borderColor} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What is a Therapy Dog Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Vad är en besökshund?
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-soft-lg mb-12">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663526201017/Nv66AfvEoMtUdNgZMyJxs4/therapy-concept-illustration.png"
                alt="Therapy dogs in schools and care homes"
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-3xl">📚</span> För barn
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Lässupport och självförtroende, lyssnar utan att vara dömande/span>
                  </li>
                  <li className="flex gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Emotionell reglering och stresshantering
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Users2 size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Sociala färdigheter och empatiutveckling</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Trygghet och pedagogiskt stöd</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="text-3xl">👴</span> För äldre
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Känslomässig komfort och sällskap</span>
                  </li>
                  <li className="flex gap-3">
                    <Users2 size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Minskad ensamhet och isolering</span>
                  </li>
                  <li className="flex gap-3">
                    <Heart size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Stress- och ångestlindring</span>
                  </li>
                  <li className="flex gap-3">
                    <Users size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span>Meningsfullt socialt engagemang och glädje</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-8">
              <p className="text-lg text-foreground leading-relaxed">
                <strong>Besökshund</strong> är utbildade för att ge tröst och emotionellt stöd till flera personer i olika miljöer. Till skillnad från servicehundar som utför specifika uppgifter för personer med funktionsnedsättningar, förbättrar besökshund emotionellt välbefinnande genom sin lugnande närvaro, villkorslösa tillgivenhet och intuitiva förståelse för mänskliga känslor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Våra tjänster
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Skräddarsydda besökshundsprogram utformade för att möta dina unika behov och mål.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} data-scroll-animate style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Quiz Section */}
      <section id="quiz" className="section-padding bg-card">
        <div className="container">
          <PersonalityQuiz />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Vad folk säger
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Hör från familjer, pedagoger och vårdgivare om effekten av besökshund.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} data-scroll-animate style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Vanliga frågor
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-border rounded-lg p-6 cursor-pointer hover:bg-background/50 transition-colors"
                >
                  <summary className="font-semibold text-foreground flex items-center justify-between">
                    {faq.question}
                    <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-foreground/80 mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Kontakta oss
              </h2>
              <p className="text-lg text-foreground/80">
                Redo att uppleva den helande kraften hos en besökshund? Kontakta Marie för att boka en session eller lära dig mer om våra tjänster.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <a href="tel:+46701234567" className="text-accent hover:text-accent/80 transition-colors">
                  +46 (0)70 773 67 27
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href="mailto:marie@terapihund.se" className="text-accent hover:text-accent/80 transition-colors">
                  mariesjogren14139@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-semibold text-foreground mb-2">Plats</h3>
                <p className="text-foreground/80">Huddinge, Stockholm, Sverige</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
