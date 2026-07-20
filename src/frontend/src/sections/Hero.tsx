import { Code, Cpu, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="hero-bg" aria-hidden="true" />
      {/* Floating orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      {/* Grid overlay */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6 hero-content text-center lg:text-left items-center lg:items-start">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border hero-badge"
          >
            <Cpu className="w-4 h-4 text-primary" />
            AI &amp; Python Developer
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground hero-title">
            Hi I am <span className="text-gradient">Prasad</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl hero-tagline">
            Python Developer &amp; AI/ML Engineering Student. Building
            intelligent software solutions using Python, Machine Learning, REST
            APIs, and modern web technologies. Completed AICTE-approved
            internship at Codec Technologies Pvt. Ltd.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 mt-2 hero-cta">
            <button
              type="button"
              onClick={scrollToProjects}
              className="btn-gradient hover-lift glow-accent px-8 py-3 rounded-lg font-semibold text-base inline-flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              View My Work
            </button>
            <a
              href="/assets/Prasad_Kapile_Resume.pdf"
              download
              className="hero-outline-btn px-8 py-3 rounded-lg font-semibold text-base transition-smooth hover-lift inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Subtle stats row */}
          <div className="flex gap-8 mt-4 hero-stats">
            {[
              { label: "Projects", value: "3+" },
              { label: "Technologies", value: "10+" },
              { label: "Focus", value: "AI/ML" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-2xl font-bold font-display text-primary">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — decorative visual */}
        <div className="hidden lg:flex flex-1 justify-center items-center hero-visual">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full bg-primary/5 blur-3xl"
              aria-hidden="true"
            />
            <div className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4 shadow-glow-md">
              <Cpu className="w-16 h-16 text-primary" aria-hidden="true" />
              <span className="font-display font-bold text-2xl text-foreground">
                AI &amp; Python
              </span>
              <span className="text-sm text-muted-foreground">
                Building intelligent solutions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
