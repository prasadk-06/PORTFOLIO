import { CheckCircle, Code, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

  const project = {
  id: 1,
  title: "AI-Powered E-Commerce Recommendation System",
  description:
    "A machine learning recommendation engine that analyzes user purchase history and browsing patterns to deliver personalized product suggestions. Built with Python, scikit-learn collaborative filtering, and a Flask REST API backend.",
  tags: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "REST API"],
  github: "https://github.com/prasadk-06",
  features: [
    "Collaborative filtering algorithm for personalized recommendations",
    "Flask REST API with JSON response format",
    "Data preprocessing pipeline using Pandas and NumPy",
    "Scalable recommendation scoring system",
  ],
};

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    function revealCards() {
      if (sectionRef.current) sectionRef.current.classList.add("is-visible");
      const card = cardRef.current;
      if (card) {
        setTimeout(() => {
          card.classList.add("is-visible");
        }, 150);
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
      id="projects"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Featured Projects" subtitle="What I've built" />

        <div className="mt-12">
          <div
            ref={cardRef}
            className="scroll-item glass-card rounded-2xl p-8 hover-lift flex flex-col gap-6 relative overflow-hidden project-featured"
          >
            {/* Featured badge */}
            <div className="absolute top-5 right-5 featured-badge text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5" aria-hidden="true" />
              Featured
            </div>

            {/* Icon */}
            <div className="project-icon w-14 h-14 rounded-xl flex items-center justify-center text-primary">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  d="M20 6c-7.7 0-13 5.8-13 12 0 3.5 1.5 6.5 4 8.5V30a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.5c2.5-2 4-5 4-8.5 0-6.2-5.3-12-13-12z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <line
                  x1="16"
                  y1="32"
                  x2="16"
                  y2="36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="20"
                  y1="32"
                  x2="20"
                  y2="37"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="24"
                  y1="32"
                  x2="24"
                  y2="36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="17" cy="18" r="1.5" fill="currentColor" />
                <circle cx="23" cy="18" r="1.5" fill="currentColor" />
                <path
                  d="M17 23c.8 1 2.4 1.5 3 1.5s2.2-.5 3-1.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-xl leading-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/90"
                  >
                    <CheckCircle
                      className="w-4 h-4 text-primary mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md tech-badge"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="btn-gradient hover-lift glow-accent inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold w-fit px-6 py-2.5"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
