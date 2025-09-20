import { Award, Briefcase, Users, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: "Marketing Head",
      company: "Jeevan Innovations",
      period: "2023 - Present",
      description: "Led comprehensive marketing strategies and cross-functional collaborations to promote impact-driven web and mobile applications. Successfully leveraged social media and content marketing to significantly grow the company's online presence and brand recognition.",
      achievements: [
        "Developed and executed integrated marketing campaigns",
        "Grew social media presence by 200%+",
        "Led cross-functional collaboration initiatives",
        "Promoted impact-driven technology solutions"
      ],
      type: "Professional Experience"
    },
    {
      icon: Users,
      title: "Event Volunteer & Workshop Organizer",
      company: "Tech Community Collaborations",
      period: "2022 - Present",
      description: "Actively assisted in organizing and conducting technical workshops and seminars in collaboration with prominent tech communities including Tech Stack, Team7, Legacy, and Apna College LPU.",
      achievements: [
        "Organized 10+ technical workshops",
        "Collaborated with 4+ tech communities",
        "Facilitated knowledge sharing sessions",
        "Mentored junior developers"
      ],
      type: "Community Involvement"
    },
    {
      icon: Zap,
      title: "Hackathon Organizer",
      company: "Hack Node India - Lovely Professional University",
      period: "2023",
      description: "Successfully organized and managed the Hack Node India hackathon at LPU, coordinating with teams, judges, and sponsors to deliver a successful tech competition event.",
      achievements: [
        "Managed 100+ participants",
        "Coordinated with industry judges",
        "Secured sponsorships and partnerships",
        "Facilitated innovation competitions"
      ],
      type: "Event Management"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "National Children Science Congress (NCSC)",
      description: "Regional level participant in NCSC for consecutive years 2018-19 and 2019-20, demonstrating consistent excellence in scientific research and innovation.",
      period: "2018-2020"
    },
    {
      icon: Award,
      title: "Data Analytics Certification",
      description: "Completed comprehensive Data Analytics certification from Deloitte, gaining expertise in data analysis, visualization, and business intelligence.",
      period: "2023"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-card to-cyber-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience and community engagement
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className="project-card p-8 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and basic info */}
                  <div className="flex items-start gap-4 lg:min-w-[300px]">
                    <div className="p-3 rounded-lg bg-cyber-primary/20 flex-shrink-0">
                      <exp.icon className="w-6 h-6 text-cyber-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-cyber-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      <span className="inline-block px-3 py-1 text-xs bg-cyber-border text-cyber-primary rounded-full mt-2">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description and achievements */}
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div>
                      <h5 className="text-foreground font-medium mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-primary mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
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

        {/* Certifications & Awards */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="project-card p-6 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyber-secondary/20">
                    <achievement.icon className="w-6 h-6 text-cyber-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                      {achievement.description}
                    </p>
                    <span className="text-cyber-secondary font-mono text-sm">
                      {achievement.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;