# Terapihund Design Brainstorm

## Design Direction: Soft Scandinavian Wellness Studio

### Selected Approach: Warm Minimalism with Organic Softness

**Design Movement:** Contemporary Scandinavian Design meets Wellness Aesthetics

**Core Principles:**
1. **Calm Minimalism** - Generous whitespace, intentional content placement, no visual clutter
2. **Organic Warmth** - Soft curves, natural color transitions, human-centered design that feels approachable
3. **Emotional Storytelling** - Each section builds trust through visual hierarchy and narrative flow
4. **Accessibility First** - High contrast, readable typography, sensory-friendly design that welcomes all visitors

**Color Philosophy:**
- **Primary Palette:** Warm beige (#F5F1ED), cream white (#FEFDFB), soft sand (#E8E4DF)
- **Accent Colors:** Warm terracotta (#D4A574), muted sage green (#A8B8A8), dusty caramel (#C9A876)
- **Dog-Specific Accents:**
  - Elvis: Chocolate brown (#6B4423) + cream white
  - Sunny: Warm reddish-brown (#A86B4A) + soft terracotta
  - Ringo: Light caramel (#D4B896) + honey beige
- **Reasoning:** These colors evoke warmth, safety, and natural elements. They're calming without being clinical, professional without being cold. The palette reflects the Scandinavian landscape and therapy's healing nature.

**Layout Paradigm:**
- **Asymmetric Sections:** Hero with diagonal wave divider, offset dog cards, staggered content blocks
- **Breathing Space:** 60-80px section padding on desktop, 40-60px on mobile
- **Card-Based Storytelling:** Each dog gets a distinct card with subtle shadows and hover elevation
- **Flow:** Hero → Introduction → Dog Profiles (staggered grid) → Educational Content → Testimonials → Contact

**Signature Elements:**
1. **Paw Print Accents:** Subtle paw prints as decorative elements in headers, dividers, and hover states
2. **Organic Wave Dividers:** Soft SVG waves between sections, slightly rotated for visual interest
3. **Soft Shadows:** Layered shadows (0 4px 12px rgba, 0 8px 24px rgba) for depth without harshness

**Interaction Philosophy:**
- **Gentle Transitions:** 300-400ms ease-in-out for all interactions
- **Hover States:** Subtle lift (transform: translateY(-4px)), soft glow, color shift
- **Scroll Animations:** Fade-in on scroll, gentle parallax on hero image
- **Dog Cards:** On hover, slight rotation, shadow expansion, color accent highlight

**Animation Guidelines:**
- **Entrance Animations:** Fade-in + slight slide-up (300ms) for cards and sections
- **Hover Effects:** Subtle scale (1.02-1.05), shadow expansion, color transitions
- **Scroll Triggers:** Fade-in at 80% viewport visibility
- **Micro-interactions:** Paw print icons animate on hover (subtle bounce), tail wag on dog card interaction
- **Avoid:** Aggressive animations, fast transitions, flashing effects

**Typography System:**
- **Display Font:** Poppins (700, 600) for headings - friendly, rounded, approachable
- **Body Font:** Inter (400, 500) for body text - clean, readable, professional
- **Hierarchy:**
  - H1: Poppins 700, 48px (desktop) / 32px (mobile), line-height 1.2
  - H2: Poppins 600, 36px (desktop) / 24px (mobile), line-height 1.3
  - H3: Poppins 600, 24px (desktop) / 20px (mobile)
  - Body: Inter 400, 16px, line-height 1.6
  - Small: Inter 400, 14px, line-height 1.5

---

## Visual Asset Strategy

**Hero Section:** Custom generated illustration of Marie with dogs in a warm, Scandinavian therapy studio setting
**Dog Avatars:** Illustrated dog portraits (one for each dog) with personality-driven expressions
**Background Textures:** Subtle linen/paper texture overlay on sections
**Icons:** Custom paw prints, hearts, and therapy-related icons in terracotta/sage

---

## Emotional Journey Mapping

1. **Curiosity** → Hero section with warm imagery and clear headline
2. **Connection** → Dog profiles with personality-driven storytelling
3. **Trust** → Professional testimonials and clear service descriptions
4. **Understanding** → Educational content about therapy dogs
5. **Action** → Prominent, warm CTA buttons throughout

---

## Accessibility Commitments

- Minimum 4.5:1 contrast ratio on all text
- Large, readable typography (16px minimum for body)
- Keyboard navigation throughout
- Alt text on all images
- Sensory-friendly design (no aggressive animations)
- Clear focus states on interactive elements
