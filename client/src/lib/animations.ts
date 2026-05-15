/**
 * Scroll animation utilities for Terapihund
 * Provides smooth fade-in and slide animations on scroll
 */

export function observeScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all elements with data-scroll-animate
  const elements = document.querySelectorAll("[data-scroll-animate]");
  elements.forEach((el) => observer.observe(el));

  return observer;
}

export function addScrollAnimations() {
  if (typeof window === "undefined") return;

  // Add animation delay classes to elements
  const cards = document.querySelectorAll(".dog-card, .service-card, .testimonial-card");
  cards.forEach((card, index) => {
    (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
  });
}
