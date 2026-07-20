import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

const contacts = [
  {
    id: 1,
    platform: "GitHub",
    handle: "@prasadk-06",
    href: "https://github.com/prasadk-06",
    colorClass: "text-foreground",
    icon: <Github className="w-7 h-7" aria-hidden="true" />,
  },
  {
    id: 2,
    platform: "LinkedIn",
    handle: "Prasad Kapile",
    href: "https://www.linkedin.com/in/prasad-kapile-86b652398/",
    colorClass: "text-primary",
    icon: <Linkedin className="w-7 h-7" aria-hidden="true" />,
  },
  {
    id: 3,
    platform: "Email",
    handle: "prasadkapile68@gmail.com",
    href: "mailto:prasadkapile68@gmail.com",
    colorClass: "text-primary",
    icon: <Mail className="w-7 h-7" aria-hidden="true" />,
  },
  {
    id: 4,
    platform: "Location",
    handle: "Maharashtra, India",
    href: null,
    colorClass: "text-muted-foreground",
    icon: <MapPin className="w-7 h-7" aria-hidden="true" />,
  },
];

type ContactEntry = (typeof contacts)[number];

function ContactCard({
  contact,
  delay,
  onRef,
}: {
  contact: ContactEntry;
  delay: number;
  onRef: (el: HTMLElement | null) => void;
}) {
  const sharedClass =
    "scroll-item glass-card rounded-2xl p-6 hover-lift glow-accent flex flex-col items-center text-center";
  const inner = (
    <>
      <div
        className={`contact-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${contact.colorClass}`}
      >
        {contact.icon}
      </div>
      <h3 className="font-display font-bold text-foreground text-lg">
        {contact.platform}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{contact.handle}</p>
      {contact.href && (
        <span className="mt-4 text-xs font-semibold text-primary flex items-center gap-1">
          Visit →
        </span>
      )}
    </>
  );

  if (contact.href) {
    return (
      <a
        ref={onRef as (el: HTMLAnchorElement | null) => void}
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${contact.platform}`}
        data-delay={delay}
        className={sharedClass}
      >
        {inner}
      </a>
    );
  }
  return (
    <div
      ref={onRef as (el: HTMLDivElement | null) => void}
      data-delay={delay}
      className={sharedClass}
    >
      {inner}
    </div>
  );
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function revealAll() {
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
          revealAll();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    const fallback = setTimeout(() => revealAll(), 1500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="scroll-section relative py-28 px-6"
    >
      <div className="section-bg-glow" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading label="Get In Touch" subtitle="Let's connect" />

        <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Open to internship opportunities, software engineering roles, and
          collaborations. Feel free to reach out.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, i) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              delay={i * 150}
              onRef={(el) => {
                cardRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Ready to hire or collaborate?
          </p>
          <a
            href="mailto:prasadkapile68@gmail.com"
            className="btn-gradient hover-lift glow-accent inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-base"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
