/**
 * ============================================
 * SKILLS SECTION
 * ============================================
 * 4 interactive skill cards with hover effects
 * 
 * Edit the 'skills' array to modify skill categories and items
 * ============================================
 */

import { useState } from "react";
import { Shield, Cloud, Brain, Users } from "lucide-react";

// Skills data - Edit this array to update skills
const skills = [
  {
    id: 1,
    icon: Shield,
    title: "Cybersecurity & Architecture",
    description: "Building robust security frameworks and defense strategies",
    items: [
      "Vulnerability Assessment & Management",
      "Security Architecture Design",
      "Penetration Testing",
      "Incident Response",
      "SIEM & Log Analysis",
      "Network Security",
    ],
    color: "from-primary to-primary/50",
  },
  {
    id: 2,
    icon: Cloud,
    title: "Cloud & Governance",
    description: "Securing cloud infrastructure and ensuring compliance",
    items: [
      "AWS Security",
      "Azure Security Center",
      "Cloud Security Posture",
      "Compliance (GDPR, HIPAA)",
      "Risk Assessment",
      "Security Policies",
    ],
    color: "from-blue-500 to-blue-500/50",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI & Data Intelligence",
    description: "Leveraging AI for threat detection and security automation",
    items: [
      "Machine Learning for Security",
      "Threat Intelligence",
      "Automated Threat Detection",
      "Natural Language Processing",
      "Data Analysis & Visualization",
      "Generative AI Applications",
    ],
    color: "from-purple-500 to-purple-500/50",
  },
  {
    id: 4,
    icon: Users,
    title: "Transferable & Forensic",
    description: "Cross-domain skills from forensic investigation background",
    items: [
      "Digital Forensics",
      "Evidence Preservation",
      "Analytical Thinking",
      "Technical Writing",
      "Cross-functional Collaboration",
      "Research & Documentation",
    ],
    color: "from-amber-500 to-amber-500/50",
  },
];

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isActive = activeCard === skill.id;
            
            return (
              <div
                key={skill.id}
                className={`
                  relative p-6 rounded-xl bg-card border border-border
                  transition-all duration-300 cursor-pointer card-glow
                  ${isActive ? "border-primary/50 scale-[1.02]" : "hover:border-primary/30"}
                `}
                onMouseEnter={() => setActiveCard(skill.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map((item, index) => (
                    <div
                      key={index}
                      className={`
                        text-sm px-3 py-2 rounded-lg bg-secondary/50 text-muted-foreground
                        transition-all duration-300
                        ${isActive ? "bg-primary/10 text-foreground" : ""}
                      `}
                      style={{ 
                        transitionDelay: isActive ? `${index * 50}ms` : "0ms" 
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Decorative gradient line */}
                <div 
                  className={`
                    absolute bottom-0 left-0 h-1 rounded-b-xl bg-gradient-to-r ${skill.color}
                    transition-all duration-300
                    ${isActive ? "opacity-100 w-full" : "opacity-0 w-0"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
