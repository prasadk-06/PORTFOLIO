import { Award, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./About";

const certifications = [
  {
    id: 1,
    name: "Python Developer Internship Certificate",
    platform: "Codec Technologies Pvt. Ltd.",
    date: "31 May 2026",
    thumbnail: "/assets/images/image-019ec9bb-695f-7378-8c5d-7b3466527964.png",
    link: null,
    type: "internship",
    badge: "AICTE Approved",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[number] | null
  >(null);

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
      id="certifications"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading
          label="Certifications"
          subtitle="Credentials & Learning"
        />

        <div
          className={`mt-12 grid grid-cols-1 gap-6 ${
            certifications.length >= 2 ? "md:grid-cols-2" : "max-w-md mx-auto"
          }`}
        >
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-delay={i * 150}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedCert(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedCert(cert);
              }}
              className="scroll-item glass-card rounded-2xl p-6 hover-lift glow-accent flex flex-col gap-4 text-left cursor-pointer h-full"
            >
              <div className="flex items-start gap-4">
                <div className="exp-icon w-12 h-12 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Award className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {cert.platform}
                  </p>
                </div>
              </div>

              {cert.thumbnail && (
                <div className="mt-3">
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.name} thumbnail`}
                    className="w-full h-40 object-cover rounded-md border border-border"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center justify-between mt-auto flex-wrap gap-3">
                <span className="period-badge text-xs font-bold px-3 py-1.5 rounded-md">
                  {cert.date}
                </span>
                {cert.badge && (
                  <span className="credential-badge">{cert.badge}</span>
                )}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="hero-outline-btn px-4 py-2 rounded-md text-sm font-semibold hover-lift"
                  aria-label={`View ${cert.name}`}
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
            aria-label="Close certificate viewer"
          />
          {/* Modal content */}
          <div className="relative z-10 w-full max-w-3xl">
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-card/80 border border-border text-foreground hover:bg-card transition-smooth"
              aria-label="Close certificate viewer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="glass-card rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src={selectedCert.thumbnail}
                alt={`${selectedCert.name} — ${selectedCert.platform}`}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
