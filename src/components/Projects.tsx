import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Lock, School, Shield } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: School,
      title: "e-School Management System",
      description: "Comprehensive school management system built with MERN stack featuring role-based access control for Admins, Teachers, and Students. Automated attendance tracking, grading system, and reporting functionality.",
      features: [
        "3-tier role-based authentication",
        "Automated attendance & grading",
        "Real-time reporting dashboard",
        "Responsive design across devices",
        "6+ hours/week time savings"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      demo: "#",
      github: "#",
      status: "Completed"
    },
    {
      icon: Lock,
      title: "Password Strength Checker",
      description: "Advanced password security analyzer that calculates entropy based on length, character variety, and checks against common weak password databases. Provides real-time feedback with security suggestions.",
      features: [
        "Entropy-based strength calculation",
        "Common password blacklist checking",
        "Real-time security feedback",
        "Privacy-focused (client-side only)",
        "Detailed improvement suggestions"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "Cryptography"],
      demo: "#",
      github: "#",
      status: "Completed"
    },
    {
      icon: Shield,
      title: "Educational Keylogger Study",
      description: "Educational project focused on understanding keylogger mechanisms for cybersecurity defense. Developed in controlled, isolated environment with emphasis on detection and prevention techniques.",
      features: [
        "Input-event level capture analysis",
        "Defense mechanism research",
        "Isolated lab environment testing",
        "Detection technique development",
        "Security awareness documentation"
      ],
      tech: ["Python", "Linux", "Security Tools", "Virtual Machines"],
      demo: "#",
      github: "#",
      status: "Research Project"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in cybersecurity, web development, and system automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card p-8 rounded-xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-cyber-primary/20 mr-4 group-hover:bg-cyber-primary/30 transition-colors">
                    <project.icon className="w-6 h-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-cyber-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-cyber-primary font-mono">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Project description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key features */}
              <div className="mb-6">
                <h4 className="text-foreground font-medium mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-cyber-border text-cyber-primary rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  className="flex-1 bg-cyber-primary hover:bg-cyber-primary/90 text-primary-foreground"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-cyber-border text-cyber-primary hover:bg-cyber-primary hover:text-primary-foreground"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary hover:text-primary-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;