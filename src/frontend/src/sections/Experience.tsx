import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

export function Experience() {
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
    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
    }, 1500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const bullets = [
    "Completed a 1-month AICTE & ICAC approved Python development internship",
    "Worked on Python-based development tasks and real-world software projects",
    "Gained hands-on experience with Python programming, scripting, and application development",
    "Internship recognized under the National Internship Portal, certified by Dr. Anurag Shrivastava (Program Manager)",
  ];

  const techTags = ["Python", "Scripting", "Application Development"];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-section relative py-28 px-6"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Experience" subtitle="Where I've worked" />

        <div className="mt-12">
          <div className="glass-card rounded-2xl p-8 hover-lift experience-card relative overflow-hidden">
            <div className="experience-accent-border" aria-hidden="true" />

            <div className="pl-6 flex flex-col gap-5">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="exp-icon w-10 h-10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground leading-tight">
                        Python Developer Intern
                      </h3>
                      <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-0.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Codec Technologies Pvt. Ltd.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <span className="period-badge text-sm font-bold px-4 py-2 rounded-lg inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    26 Apr 2026 – 31 May 2026
                  </span>
                </div>
              </div>

              {/* Credential badges */}
              <div className="flex flex-wrap gap-2">
                <span className="credential-badge inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  AICTE & ICAC Approved
                </span>
                <span className="credential-badge inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  National Internship Portal
                </span>
              </div>

              {/* Description bullets */}
              <ul className="flex flex-col gap-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-1">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md tech-badge"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
