import { Layout } from "@/components/Layout";
import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { GitHubSection } from "@/sections/GitHubSection";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Resume, StickyResumeButton } from "@/sections/Resume";
import { Skills } from "@/sections/Skills";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Achievements />
      <Resume />
      <GitHubSection />
      <Contact />
      <StickyResumeButton />
    </Layout>
  );
}
