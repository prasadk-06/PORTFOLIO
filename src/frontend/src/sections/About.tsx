import { useEffect, useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Immediately visible if already in viewport (e.g. page load near top)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    // Fallback: ensure visible after 1.2s regardless
    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
    }, 1200);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const stats = [
    { value: "1", label: "Internship" },
    { value: "3+", label: "Projects" },
    { value: "7", label: "Skill Categories" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-section relative py-28 px-6"
    >
      {/* Section background gradient */}
      <div className="section-bg-glow" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading label="About Me" subtitle="Who I am" />

        <div className="mt-12 glass-card rounded-2xl p-8 sm:p-10 hover-lift">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Bio */}
            <div className="flex-1">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am Prasad Kapile, a Computer Science Engineering student passionate about software engineering, artificial intelligence, and backend development.
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                I enjoy building practical applications using Python, Java, React, and modern web technologies while continuously improving my problem-solving skills through Data Structures and Algorithms.
              </p>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Currently seeking internship and entry-level software engineering opportunities where I can contribute, learn, and build impactful software.
              </p>
            </div>

            {/* Stats */}
            <div className="flex lg:flex-col gap-4 flex-wrap">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 lg:flex-none min-w-[100px] glass-card rounded-xl px-5 py-4 text-center"
                >
                  <div className="text-3xl font-bold font-display text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  label,
  subtitle,
}: { label: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {subtitle && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
        {label}
      </h2>
      <div className="mt-3 flex items-center gap-3">
        <div className="h-1 w-12 rounded-full bg-primary" />
        <div
          className="h-px w-8 rounded-full"
          style={{ background: "oklch(var(--primary) / 0.4)" }}
        />
        <div
          className="h-px w-4 rounded-full"
          style={{ background: "oklch(var(--primary) / 0.2)" }}
        />
      </div>
    </div>
  );
}

export { SectionHeading };
