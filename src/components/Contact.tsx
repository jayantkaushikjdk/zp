import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zoya85488@gmail.com",
      link: "mailto:zoya85488@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8791231347",
      link: "tel:+918791231347"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/zoya8588",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/zoya-parveen-a2b311364/",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      link: "mailto:zoya85488@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyber-dark to-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss cybersecurity opportunities? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Let's Start a Conversation
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborating on innovative projects, 
              or sharing insights about cybersecurity and web development. Whether you're looking for a 
              developer, have a project in mind, or just want to network, feel free to reach out!
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center group">
                  <div className="p-3 rounded-lg bg-cyber-primary/20 mr-4 group-hover:bg-cyber-primary/30 transition-colors">
                    <info.icon className="w-5 h-5 text-cyber-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a 
                      href={info.link}
                      className="text-foreground hover:text-cyber-primary transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-muted-foreground mb-4">Connect with me on:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-cyber-card border border-cyber-border hover:border-cyber-primary transition-all cyber-glow group ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-cyber-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="project-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-cyber-card border-cyber-border text-foreground focus:border-cyber-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-cyber-card border-cyber-border text-foreground focus:border-cyber-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-cyber-card border-cyber-border text-foreground focus:border-cyber-primary"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-cyber-card border-cyber-border text-foreground focus:border-cyber-primary min-h-[120px]"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-cyber-primary hover:bg-cyber-primary/90 text-primary-foreground cyber-glow"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                I typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;