import {
  BookOpen,
  Brain,
  Code2,
  FileText,
  Globe,
  Server,
  Terminal,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeading } from "./About";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}

const categories: SkillCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    delay: 0,
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    delay: 100,
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Flask", "Node.js", "Express.js", "REST APIs"],
    delay: 200,
  },
  {
    title: "AI / ML",
    icon: <Brain className="w-6 h-6" />,
    skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "OpenCV"],
    delay: 300,
  },
  {
    title: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
    delay: 400,
  },
  {
    title: "Core CS",
    icon: <BookOpen className="w-6 h-6" />,
    skills: ["Object-Oriented Programming", "Data Structures", "Problem Solving"],
    delay: 500,
  },
];

export function Skills() {
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
      id="skills"
      className="scroll-section relative py-28 px-6"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading label="Technical Skills" subtitle="What I work with" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-delay={cat.delay}
              className="scroll-item glass-card rounded-2xl p-6 hover-lift glow-accent cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="skill-icon-box flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-primary">
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-base">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md tech-badge hover-lift"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
