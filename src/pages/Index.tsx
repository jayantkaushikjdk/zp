import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-cyber-border bg-cyber-dark">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Zoya Parveen. Built with passion for cybersecurity and innovation.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Designed and developed with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;