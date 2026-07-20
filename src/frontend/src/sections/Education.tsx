import { GraduationCap } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

const education = [
  {
    degree: "B.Tech Computer Science Engineering (AI & ML)",
    college: "JSPM University",
    university: "Pune, Maharashtra, India",
    graduation: "Expected 2029",
    cgpa: "8.0 (FY)",
  },
];

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
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
    const fallback = setTimeout(() => el.classList.add("is-visible"), 1500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Education" subtitle="Academic Background" />

        <div className="mt-12">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card rounded-2xl p-8 hover-lift experience-card relative overflow-hidden"
            >
              <div className="experience-accent-border" aria-hidden="true" />
              <div className="pl-6 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-4">
                    <div className="exp-icon w-12 h-12 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <GraduationCap className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold text-sm mt-1">
                        {edu.college}
                      </p>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {edu.university}
                      </p>
                    </div>
                  </div>
                  <span className="period-badge text-sm font-bold px-4 py-2 rounded-lg inline-block flex-shrink-0">
                    {edu.graduation}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-1">
                  <span className="tech-badge text-xs font-semibold px-3 py-1.5 rounded-md">
                    CGPA: {edu.cgpa}
                  </span>
                  <span className="tech-badge text-xs font-semibold px-3 py-1.5 rounded-md">
                    AI & ML Specialization
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
