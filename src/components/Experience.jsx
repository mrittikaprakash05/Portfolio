/**
 * ============================================
 * EXPERIENCE SECTION
 * ============================================
 * Vertical timeline with animated entries
 * 
 * Edit the 'experiences' array to update work history
 * ============================================
 */

import { Briefcase, Calendar, MapPin } from "lucide-react";

// Experience data - Edit this array to update work history
const experiences = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    company: "PREMIER",
    location: "Remote",
    period: "Sep 2024 - Present",
    description: [
      "Conducting comprehensive vulnerability assessments and security audits across enterprise infrastructure",
      "Implementing AI-driven threat detection systems to enhance security operations efficiency",
      "Developing security policies and procedures aligned with industry frameworks (NIST, ISO 27001)",
      "Collaborating with cross-functional teams to integrate security into DevOps workflows",
    ],
    current: true,
  },
  {
    id: 2,
    title: "Operations & Security Associate",
    company: "Hospitality Industry",
    location: "On-site",
    period: "Jun 2023 - Apr 2024",
    description: [
      "Managed security protocols and access control systems for guest safety",
      "Analyzed operational data to identify potential security vulnerabilities",
      "Trained staff on security awareness and incident reporting procedures",
      "Implemented digital security measures for customer data protection",
    ],
    current: false,
  },
  {
    id: 3,
    title: "Forensic Medicine Intern",
    company: "Medical Examiner's Office",
    location: "On-site",
    period: "Nov 2023",
    description: [
      "Assisted in forensic investigations requiring meticulous evidence handling",
      "Applied analytical methodologies to complex case analysis",
      "Documented findings with precision for legal proceedings",
      "Developed expertise in chain of custody and evidence preservation",
    ],
    current: false,
  },
  {
    id: 4,
    title: "Legal Research Intern",
    company: "Law Firm",
    location: "On-site",
    period: "May 2023",
    description: [
      "Conducted legal research on cybercrime and digital evidence admissibility",
      "Analyzed case law related to data privacy and security regulations",
      "Prepared documentation for cyber-related legal proceedings",
      "Gained understanding of legal frameworks governing digital security",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2" />

          {/* Timeline Entries */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full timeline-dot md:-translate-x-1/2 z-10">
                {exp.current && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
                )}
              </div>

              {/* Content Card */}
              <div 
                className={`
                  flex-1 ml-8 md:ml-0 p-6 bg-card rounded-xl border border-border
                  transition-all duration-300 hover:border-primary/50 card-glow
                  ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
                `}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;