import { Button } from "@/components/ui/button";
import { Download, Shield, Code, Users, Target } from "lucide-react";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Zoya_Parveen_Resume.pdf';
    link.click();
  };

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every system I build is designed with security as a fundamental principle, not an afterthought."
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing maintainable, efficient code that stands the test of time and team collaboration."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experienced in leading teams and collaborating across disciplines to achieve common goals."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that matter, with a keen eye for detail and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-card to-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about securing the digital world through ethical hacking and innovative development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-semibold text-foreground mb-6">
              Cybersecurity Professional & Full-Stack Developer
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated cybersecurity student at <span className="text-cyber-primary font-medium">Lovely Professional University</span>, 
                pursuing a Bachelor's in Computer Applications with honors in Cybersecurity. My journey in technology 
                began with a fascination for understanding how systems work and, more importantly, how to protect them.
              </p>
              
              <p>
                With expertise in <span className="text-cyber-primary font-medium">ethical hacking, network security, and full-stack development</span>, 
                I bridge the gap between security and functionality. I've successfully built and secured applications using the 
                MERN stack while maintaining a strong focus on cybersecurity best practices.
              </p>
              
              <p>
                Beyond technical skills, I've demonstrated leadership as a <span className="text-cyber-primary font-medium">Marketing Head at Jeevan Innovations</span> 
                and actively contribute to the tech community through workshop organization and hackathon management. 
                I believe in the power of knowledge sharing and collaborative learning.
              </p>
              
              <p>
                My goal is to become a trusted cybersecurity professional who not only identifies vulnerabilities 
                but also builds robust solutions that protect businesses and individuals in our increasingly digital world.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">10+</div>
                <div className="text-sm text-muted-foreground">Workshops Organized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-primary">2x</div>
                <div className="text-sm text-muted-foreground">NCSC Participant</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="cyber-glow bg-cyber-primary hover:bg-cyber-primary/90 text-primary-foreground"
              onClick={downloadResume}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Core Values */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Core Values & Principles
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="project-card p-6 rounded-xl group hover:border-cyber-primary/50"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyber-primary/20 group-hover:bg-cyber-primary/30 transition-colors flex-shrink-0">
                      <value.icon className="w-5 h-5 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-cyber-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-8 p-6 bg-cyber-primary/10 rounded-xl border border-cyber-primary/20">
              <h4 className="text-lg font-semibold text-cyber-primary mb-3">
                Currently Focused On
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                  Advanced penetration testing techniques
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                  Cloud security and DevSecOps practices
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                  Building secure full-stack applications
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                  Contributing to open-source security tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;