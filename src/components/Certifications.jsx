/**
 * ============================================
 * CERTIFICATIONS SECTION
 * ============================================
 * Grid of certification cards with editable placeholders
 * 
 * To add/edit certifications:
 * 1. Update the 'certifications' array below
 * 2. Replace 'image' URLs with actual certificate images
 * 3. Add skill tags relevant to each certification
 * ============================================
 */

import { Award, ExternalLink } from "lucide-react";

// Certification data - Edit this array to add/modify certifications
const certifications = [
  {
    id: 1,
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2024",
    // Replace with actual certificate image URL
    image: "/placeholder.svg",
    skills: ["Network Security", "Threats", "Cryptography"],
    link: "#", // Add verification link if available
  },
  {
    id: 2,
    name: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "2024",
    image: "/placeholder.svg",
    skills: ["Security Operations", "SIEM", "Python"],
    link: "#",
  },
  {
    id: 3,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["Cloud Security", "AWS", "Architecture"],
    link: "#",
  },
  {
    id: 4,
    name: "IBM Cybersecurity Analyst",
    issuer: "IBM",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["Threat Intelligence", "Incident Response"],
    link: "#",
  },
  {
    id: 5,
    name: "Microsoft SC-900",
    issuer: "Microsoft",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["Azure", "Compliance", "Identity"],
    link: "#",
  },
  {
    id: 6,
    name: "Cisco CCNA Security",
    issuer: "Cisco",
    date: "2023",
    image: "/placeholder.svg",
    skills: ["Network Security", "Firewall", "VPN"],
    link: "#",
  },
  {
    id: 7,
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2024",
    image: "/placeholder.svg",
    skills: ["Penetration Testing", "Ethical Hacking"],
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 card-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Certificate Image - Replace placeholder */}
              <div className="relative h-32 bg-secondary/50 overflow-hidden">
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  // Add error handling for missing images
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Certification Name */}
                <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>

                {/* Issuer & Date */}
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer} • {cert.date}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verification Link */}
                {cert.link && cert.link !== "#" && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify
                  </a>
                )}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Note for editing */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          <span className="text-primary">*</span> Replace placeholder images with actual certificate badges
        </p>
      </div>
    </section>
  );
};

export default Certifications;
