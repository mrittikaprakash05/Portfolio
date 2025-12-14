/**
 * ============================================
 * PROJECTS SECTION
 * ============================================
 * Project showcase cards with descriptions
 * 
 * Edit the 'projects' array to add/modify projects
 * ============================================
 */

import { FolderKanban, Github, ExternalLink, Shield, Brain } from "lucide-react";

// Projects data - Edit this array to update projects
const projects = [
  {
    id: 1,
    title: "Digital Evidence Simulation",
    description: "A comprehensive simulation environment for training in digital forensics and evidence handling. This project creates realistic scenarios for investigating cybercrimes, analyzing digital artifacts, and maintaining chain of custody in virtual environments.",
    icon: Shield,
    tags: ["Digital Forensics", "Python", "Evidence Analysis", "Simulation"],
    features: [
      "Realistic crime scene simulation with planted digital evidence",
      "Chain of custody tracking system",
      "Evidence preservation and documentation tools",
      "Training modules for forensic investigation techniques",
    ],
    github: "#", // Add actual GitHub link
    demo: "#", // Add demo link if available
    image: null, // Add project screenshot if available
  },
  {
    id: 2,
    title: "Generative AI for Security Workflows",
    description: "Exploring the application of generative AI models to automate and enhance security operations. This research project investigates how LLMs can assist in threat detection, incident response automation, and security documentation generation.",
    icon: Brain,
    tags: ["Generative AI", "LLMs", "Security Automation", "Research"],
    features: [
      "Automated threat intelligence summarization",
      "AI-powered incident response playbook generation",
      "Natural language security policy creation",
      "Integration with SIEM systems for alert triage",
    ],
    github: "#",
    demo: "#",
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-lg">
            <FolderKanban className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            
            return (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 card-glow"
              >
                {/* Project Header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="px-6 pb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="px-6 pb-6 flex gap-4">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
