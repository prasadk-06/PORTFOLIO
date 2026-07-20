import { Github, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

const repos = [
  {
    id: 1,
    name: "AI E-commerce Recommendation System",
    description:
      "Intelligent product recommendation engine with Python & Flask",
    stars: 0,
    language: "Python",
    url: "https://github.com/prasadk-06",
  },
  {
    id: 2,
    name: "ML Data Pipeline",
    description: "Complete data processing and model training pipeline",
    stars: 0,
    language: "Python",
    url: "https://github.com/prasadk-06",
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Modern responsive portfolio built with React & TypeScript",
    stars: 0,
    language: "TypeScript",
    url: "https://github.com/prasadk-06/PORTFOLIO",
  },
];

export function GitHubSection() {
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
      id="github"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading label="GitHub" subtitle="Open Source & Code" />

        <div className="mt-8 flex items-center justify-center">
          <a
            href="https://github.com/prasadk-06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-card rounded-2xl px-6 py-4 hover-lift glow-accent"
          >
            <Github className="w-8 h-8 text-foreground" aria-hidden="true" />
            <div className="text-left">
              <p className="font-display font-bold text-foreground">
                @prasadk-06
              </p>
              <p className="text-xs text-muted-foreground">
                github.com/prasadk-06
              </p>
            </div>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} on GitHub`}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-delay={i * 150}
              className="scroll-item glass-card rounded-2xl p-6 hover-lift glow-accent flex flex-col gap-4 h-full"
            >
              <div className="flex items-center gap-3">
                <Github
                  className="w-5 h-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="font-display font-bold text-base text-foreground truncate">
                  {repo.name}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {repo.description}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-3 h-3 rounded-full ${repo.language === "Python" ? "bg-[oklch(0.65_0.18_145)]" : "bg-[oklch(0.6_0.15_260)]"}`}
                  />
                  <span className="text-xs text-muted-foreground">
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star
                    className="w-3.5 h-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-muted-foreground">
                    {repo.stars}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
