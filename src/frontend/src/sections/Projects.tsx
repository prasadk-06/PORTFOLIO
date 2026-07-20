import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  github: string;
  demo?: string;
  image: string | null;
  featured: boolean;
  status: 'Completed' | 'In Progress' | 'Planned';
  category: string;
  year: number;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Prasad Kapile Portfolio',
    description: 'A modern developer portfolio built to showcase my projects, technical skills, and experience in software development, AI/ML, web development, and Minecraft/Discord development. Features include responsive design, smooth animations, dark theme, resume download, and SEO optimization.',
    shortDescription: 'Modern, responsive portfolio showcasing skills and projects.',
    github: 'https://github.com/prasadk-06/PORTFOLIO',
    demo: 'https://prasad-portfolio-five.vercel.app/',
    image: '/assets/images/Screenshot 2026-07-20 152613.jpg',
    featured: true,
    status: 'Completed',
    category: 'Web Development',
    year: 2026,
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    id: 'smart-ai-task-manager',
    title: 'Smart AI Task Manager',
    description: 'A premium AI-powered task management app built on the Internet Computer. It offers AI smart suggestions, an intuitive drag-and-drop priority system, real-time search, and dashboard statistics, combining a React frontend with a Motoko backend.',
    shortDescription: 'Premium AI-powered task app on the Internet Computer.',
    github: 'https://github.com/prasadk-06/SMART-AI-TASK-MANAGER',
    image: null,
    featured: true,
    status: 'Completed',
    category: 'Web3 / AI',
    year: 2026,
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'React Query', 'Motoko', 'Internet Computer'],
  },
  {
    id: 'todo-cli',
    title: 'Todo CLI',
    description: 'A polished, production-style command-line application built with Python, Click, and Rich. It features persistent JSON storage and provides a clean interface for managing tasks, priority assignment, searching, and viewing task statistics through rich terminal tables.',
    shortDescription: 'Production-ready CLI task manager with JSON storage.',
    github: 'https://github.com/prasadk-06/todo-cli',
    image: null,
    featured: true,
    status: 'Completed',
    category: 'CLI Tool',
    year: 2026,
    techStack: ['Python', 'Click', 'Rich', 'JSON'],
  },
  {
    id: 'uno-game',
    title: 'UNO Game',
    description: 'A complete local UNO game for Windows built with Python 3.12 and pygame-ce. It features an official 108-card deck, single-player mode against three AI opponents, local multiplayer for up to four players, and custom house rules with generated card graphics.',
    shortDescription: 'Local multiplayer UNO game built with Python and pygame.',
    github: 'https://github.com/prasadk-06/UNO-GAME',
    image: null,
    featured: true,
    status: 'Completed',
    category: 'Game Development',
    year: 2026,
    techStack: ['Python 3.12', 'pygame-ce'],
  }
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setPage((prev) => {
        let next = prev + newDirection;
        if (next < 0) return featuredProjects.length - 1;
        if (next >= featuredProjects.length) return 0;
        return next;
      });
    },
    [featuredProjects.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (featuredProjects.length === 0) return null;

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-green-500">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. Swipe or use arrow keys to navigate.
          </p>
        </div>

        {}
        <div className="relative h-[850px] lg:h-[550px] w-full flex items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous Project"
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next Project"
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 backdrop-blur-md border border-white/10 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full cursor-grab active:cursor-grabbing group"
            >
              <div className="flex flex-col lg:flex-row w-full h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.1)] transition-shadow duration-500">
                
                {}
                <div className="w-full lg:w-1/2 h-64 lg:h-full relative overflow-hidden bg-black/50">
                  {featuredProjects[page].image ? (
                    <img
                      src={featuredProjects[page].image}
                      alt={featuredProjects[page].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      draggable="false"
                    />
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#0d1f14] to-[#0a141f] group-hover:scale-105 transition-transform duration-700 p-8 border-r border-white/5 overflow-hidden">
                      {/* Animated Grid Background */}
                      <motion.div
                        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
                        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }}
                      />

                      {/* Centered Fallback Content */}
                      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
                        <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-green-400 font-mono text-sm shadow-xl">
                          {featuredProjects[page].category}
                        </span>

                        <h3 className="text-3xl md:text-5xl font-extrabold text-white/50 tracking-tight text-center drop-shadow-2xl px-4">
                          {featuredProjects[page].title}
                        </h3>

                        {/* Tech Stack Preview */}
                        <div className="flex flex-wrap justify-center gap-2 mt-2 px-4 max-w-sm">
                          {featuredProjects[page].techStack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                          {featuredProjects[page].techStack.length > 4 && (
                            <span className="px-2.5 py-1 bg-white/5 text-gray-500 text-xs rounded border border-white/5">
                              +{featuredProjects[page].techStack.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Preview Coming Soon Badge */}
                      <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white/70 text-[10px] md:text-xs font-semibold tracking-wider uppercase rounded-lg border border-white/10 shadow-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        Preview Coming Soon
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between relative z-10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/20">
                        {featuredProjects[page].category}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-white/10 text-white/80 rounded-full border border-white/10">
                        {featuredProjects[page].year}
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/20">
                        {featuredProjects[page].status}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      {featuredProjects[page].title}
                    </h3>

                    {/* Metadata Row */}
                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500 mb-6 font-mono">
                      <span>Open Source</span>
                      {(featuredProjects[page].id === 'portfolio' || 
                        featuredProjects[page].id === 'smart-ai-task-manager' || 
                        featuredProjects[page].id === 'todo-cli') && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-700" />
                          <span>MIT License</span>
                          <span className="w-1 h-1 rounded-full bg-gray-700" />
                          <span className="flex items-center gap-1.5 text-green-500/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Active
                          </span>
                        </>
                      )}
                      {featuredProjects[page].id === 'uno-game' && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-700" />
                          <span>Education Purpose Only</span>
                        </>
                      )}
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                      {featuredProjects[page].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProjects[page].techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-lg text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a
                      href={featuredProjects[page].github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-green-400 transition-colors focus:ring-4 focus:ring-white/20"
                    >
                      <Github size={20} /> View Code
                    </a>
                    {featuredProjects[page].demo && (
                      <a
                        href={featuredProjects[page].demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Live Demo"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 transition-colors border border-white/10 focus:ring-4 focus:ring-white/10"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {}
        <div className="flex justify-center gap-3 mt-12">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > page ? 1 : -1);
                setPage(idx);
              }}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === page ? 'w-10 bg-green-500' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {}
        {moreProjects.length > 0 && (
          <div className="mt-32">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              More <span className="text-gray-400">Repositories</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-400 rounded-full">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
