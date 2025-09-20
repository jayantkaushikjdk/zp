import { BookOpen, GraduationCap, School } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor's in Computer Application (HONS.)",
      specialization: "Cybersecurity",
      institution: "Lovely Professional University, Punjab",
      period: "2022 - 2025 (Expected)",
      cgpa: "6.45",
      status: "Currently Pursuing",
      description: "Comprehensive program focusing on computer applications with specialized emphasis on cybersecurity, network security, and ethical hacking practices.",
      highlights: [
        "Cybersecurity specialization track",
        "Hands-on ethical hacking labs",
        "Network security projects",
        "Industry collaboration programs"
      ]
    },
    {
      icon: School,
      degree: "Intermediate (12th Grade)",
      specialization: "Science Stream",
      institution: "PM Shri Kendriya Vidyalaya Ranikhet (Almora)",
      period: "2023 - 2024",
      percentage: "74.4%",
      status: "Completed",
      description: "Completed higher secondary education with focus on mathematics, physics, and computer science, building strong analytical and problem-solving foundations.",
      highlights: [
        "Strong foundation in mathematics",
        "Computer science fundamentals",
        "Analytical thinking development",
        "Scientific methodology training"
      ]
    },
    {
      icon: BookOpen,
      degree: "Matriculation (10th Grade)",
      specialization: "General Studies",
      institution: "PM Shri Kendriya Vidyalaya Ranikhet (Almora)",
      period: "2020 - 2021",
      percentage: "89.9%",
      status: "Completed",
      description: "Achieved excellent academic performance with strong foundation in core subjects including mathematics, science, and computer applications.",
      highlights: [
        "Outstanding academic performance (89.9%)",
        "Strong mathematics foundation",
        "Early computer science exposure",
        "Leadership and extracurricular activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong academic foundation with specialized focus on cybersecurity and technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-cyber-border"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative animate-fade-in-up ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute w-4 h-4 bg-cyber-primary rounded-full border-4 border-background
                  ${index % 2 === 0 
                    ? 'left-2 md:right-[-8px] md:left-auto' 
                    : 'left-2 md:left-[-8px]'
                  }`}>
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 ${index === 0 ? 'md:mr-8' : ''}`}>
                  <div className="project-card p-8 rounded-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-cyber-primary/20 flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-cyber-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <span className={`inline-block px-3 py-1 text-xs rounded-full font-mono mt-2 sm:mt-0 ${
                            edu.status === 'Currently Pursuing' 
                              ? 'bg-cyber-primary/20 text-cyber-primary' 
                              : 'bg-cyber-secondary/20 text-cyber-secondary'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        {edu.specialization && (
                          <p className="text-cyber-primary font-medium mb-1">
                            {edu.specialization}
                          </p>
                        )}
                        
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground font-mono">
                          <span>{edu.period}</span>
                          {(edu.cgpa || edu.percentage) && (
                            <>
                              <span className="hidden sm:inline">•</span>
                              <span className="text-cyber-primary font-semibold">
                                {edu.cgpa ? `CGPA: ${edu.cgpa}` : `${edu.percentage}`}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-foreground font-medium mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional academic info */}
        <div className="mt-16 text-center">
          <div className="project-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Academic Focus Areas
            </h3>
            <p className="text-muted-foreground mb-6">
              My educational journey has been strategically aligned with emerging technologies and cybersecurity trends
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Network Security',
                'Ethical Hacking',
                'Web Development',
                'Data Structures',
                'Algorithms',
                'Database Systems',
                'Software Engineering',
                'Project Management'
              ].map((subject, index) => (
                <div 
                  key={subject}
                  className="p-3 bg-cyber-border rounded-lg text-cyber-primary text-sm font-medium hover:bg-cyber-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;