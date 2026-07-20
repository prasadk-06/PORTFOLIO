# Design Brief

## Direction

Deep-Space Glassmorphism — Premium tech portfolio, dark navy-black gradients, frosted-glass cards, emerald-green accents, serious professional aesthetic.

## Tone

Refined minimalism with tech edge: no chaos, no decoration. Every pixel serves the narrative of a mission-driven developer.

## Differentiation

Glassmorphic cards, emerald CTA buttons with glow, choreographed fade-in-up animations create premium tech startup feel vs. beginner portfolios.

## Color Palette

| Token | OKLCH | Role |
|:---|:---|:---|
| background | 0.12 0.008 270 | Deep navy-black page base |
| foreground | 0.94 0.01 270 | Primary text on dark |
| card | 0.16 0.015 270 | Frosted surface containers |
| primary | 0.65 0.18 145 | Emerald green (CTA, accent) |
| primary-foreground | 0.12 0.008 270 | Text on primary buttons |
| border | 0.24 0.01 270 | Card edges, 30% opacity |
| destructive | 0.55 0.22 25 | Alert/error state |

## Typography

Display: Space Grotesk (hero, titles) — Bold, geometric, tech-forward. Body: General Sans — Clean, readable. Scale: hero `text-6xl md:text-7xl`, h2 `text-4xl font-bold`, body `text-base md:text-lg`.

## Elevation & Depth

Layered glassmorphic surfaces: `backdrop-blur-md bg-card/40 border-border/30`. Elevated shadows on hover. Glow effects on interactive states.

## Structural Zones

| Zone | Background | Border | Notes |
|:---|:---|:---|:---|
| Navigation | `card/80 backdrop-blur` | `border/40` bottom | Sticky, emerald active indicator |
| Hero | Animated gradient | None | Full-height, fade-in-up entrance |
| Content | `background` | None | Alternating section backgrounds |
| Cards/Projects | `glass-card` utility | `border/30` soft | Hover lift, elevated shadow |
| Footer | `secondary/20` | `border/40` top | Muted text, emerald links |

## Spacing & Rhythm

Spacious 24px/32px section gaps, 16px card padding, 8px micro-spacing grid. Hero breathing room before scroll sections.

## Component Patterns

Buttons: Gradient emerald with hover scale/lift/glow. Cards: Glassmorphic utility, hover lift, 8px radius. Badges: Muted bg, pill shape. Nav: Active emerald border + text highlight.

## Motion

Entrance: Fade-in-up (0.6s ease-out) staggered. Hover: Lift (translate-y[-4px] + shadow-elevated), 0.3s smooth transition.

## Utilities

.glass-card: Frosted surface with backdrop-blur, border, opacity. .dashed-placeholder: Dashed border placeholder card. .credential-badge: Emerald-tinted badge. .sticky-float: Fixed positioning with z-40.

## Constraints

All OKLCH tokens, no hex/rgb. backdrop-blur-md only. transition-smooth (0.3s cubic-bezier). No emojis. Mobile-first responsive, min 16px text.

## Signature Detail

Emerald buttons with subtle glow shadow on hover — premium "magic button" moment elevating entire experience.
