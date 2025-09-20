import { Code, Database, Shield, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 75 },
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "Ethical Hacking", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "Penetration Testing", level: 75 },
        { name: "Security Audit", level: 70 },
      ]
    },
    {
      icon: Database,
      title: "Technologies",
      skills: [
        { name: "MERN Stack", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Git", level: 85 },
      ]
    },
    {
      icon: Zap,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Leadership", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Adaptability", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-cyber-dark to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Constantly evolving my technical arsenal to stay ahead in cybersecurity and development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="project-card p-8 rounded-xl animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-cyber-primary/20 mr-4">
                  <category.icon className="w-6 h-6 text-cyber-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-cyber-primary font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-border rounded-full h-2">
                      <div 
                        className="skill-bar h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          '--skill-width': `${skill.level}%`,
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Express.js', 'MySQL', 'Git', 'Linux', 'Kali Linux', 'Wireshark', 'Metasploit'].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-cyber-card border border-cyber-border rounded-full text-cyber-primary hover:border-cyber-primary transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;