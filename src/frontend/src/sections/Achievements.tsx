import { Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

const achievements = [
  {
    id: 1,
    title: "AICTE & ICAC Approved Internship Completion",
    description:
      "Completed 1-month Python Developer Internship at Codec Technologies Pvt. Ltd. under the National Internship Portal (May 2026)",
    category: "Professional",
    badge: "AICTE Approved",
  },
];

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    function revealCards() {
      if (sectionRef.current) sectionRef.current.classList.add("is-visible");
      for (const card of cardRefs.current) {
        if (card) {
          const delay = card.dataset.delay ?? "0";
          setTimeout(() => {
            card.classList.add("is-visible");
          }, Number(delay));
        }
      }
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealCards();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    const fallback = setTimeout(() => revealCards(), 1500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          label="Achievements"
          subtitle="Highlights & Milestones"
        />

        <div
          className={`mt-12 grid grid-cols-1 gap-6 ${
            achievements.length >= 3
              ? "md:grid-cols-3"
              : achievements.length === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "max-w-sm mx-auto"
          }`}
        >
          {achievements.map((achievement, i) => (
            <div
              key={achievement.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-delay={i * 150}
              className="scroll-item glass-card rounded-2xl p-6 hover-lift glow-accent flex flex-col gap-4 h-full"
            >
              <div className="flex items-center gap-3">
                <div className="exp-icon w-10 h-10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Trophy className="w-5 h-5" aria-hidden="true" />
                </div>
                {achievement.badge && (
                  <span className="credential-badge text-xs py-1 px-2.5">
                    {achievement.badge}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
