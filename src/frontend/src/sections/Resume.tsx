import { Download, Eye, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

export function Resume() {
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
      id="resume"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Resume" subtitle="Download My CV" />

        <div className="mt-12 glass-card rounded-2xl p-8 sm:p-10 hover-lift text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="exp-icon w-16 h-16 rounded-2xl flex items-center justify-center text-primary">
              <FileText className="w-8 h-8" aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                Prasad Kapile
              </h3>
              <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
                My resume is available for download. It covers my technical
                skills, internship experience, and academic background.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a
                href="/assets/Prasad_Kapile_Resume.pdf"
                download
                className="btn-gradient hover-lift glow-accent inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base"
              >
                <Download className="w-5 h-5" aria-hidden="true" />
                Download Resume
              </a>

              <a
                href="/assets/Prasad_Kapile_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-outline-btn px-8 py-3 rounded-lg font-semibold text-base transition-smooth hover-lift inline-flex items-center gap-2"
              >
                <Eye className="w-5 h-5" aria-hidden="true" />
                View Resume
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-2">
              PDF format • Updated June 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StickyResumeButton() {
  return (
    <a
      href="/assets/Prasad_Kapile_Resume.pdf"
      download
      className="sticky-float btn-gradient inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm shadow-lg"
      aria-label="Download Resume"
    >
      <Download className="w-4 h-4" aria-hidden="true" />
      Resume
    </a>
  );
}
