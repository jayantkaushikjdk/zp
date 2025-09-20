import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Shield, Terminal } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Zoya_Parveen_Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 cyber-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 cyber-secondary rounded-full opacity-15 blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 cyber-accent rounded-full opacity-10 blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Floating icons */}
          <div className="flex justify-center mb-8 space-x-8">
            <Shield className="w-8 h-8 text-cyber-primary float" />
            <Terminal className="w-8 h-8 text-cyber-secondary float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Zoya</span>
            <span className="block gradient-text text-6xl md:text-8xl">Parveen</span>
          </h1>

          {/* Tagline with typing effect */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Cybersecurity Professional
            </p>
            <p className="text-lg text-cyber-primary typing max-w-2xl mx-auto">
              Ethical Hacker • Network Security • Full-Stack Developer
            </p>
          </div>

          {/* Professional summary */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate cybersecurity student specializing in ethical hacking and network security. 
            Experienced in full-stack development with the MERN stack, building secure and scalable applications. 
            Currently pursuing BCA (HONS.) in Cybersecurity at Lovely Professional University.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="cyber-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-primary-foreground px-8 py-3"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/zoya8588" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-primary transition-colors cyber-glow p-3 rounded-full border border-cyber-border hover:border-cyber-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/zoya-parveen-a2b311364/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-primary transition-colors cyber-glow p-3 rounded-full border border-cyber-border hover:border-cyber-primary"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:zoya85488@gmail.com"
              className="text-muted-foreground hover:text-cyber-primary transition-colors cyber-glow p-3 rounded-full border border-cyber-border hover:border-cyber-primary"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyber-primary hover:text-cyber-secondary transition-colors"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;