/**
 * ============================================
 * ABOUT SECTION
 * ============================================
 * Personal introduction with 3 paragraphs
 * 
 * Edit the paragraph content below to update your story
 * ============================================
 */

import { User, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-primary/10 rounded-lg">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl">
          {/* Paragraph 1 - The Journey */}
          <div className="gradient-border p-6 lg:p-8">
            <div className="relative z-10">
              <span className="text-primary font-mono text-sm mb-4 block">01 // The Journey</span>
              <p className="text-muted-foreground leading-relaxed">
                My journey into cybersecurity began from an unconventional path — forensic archaeology. 
                Working on excavation sites taught me the value of meticulous investigation, pattern 
                recognition, and evidence preservation. These skills translated seamlessly into digital 
                forensics and threat hunting, where every byte of data tells a story and every anomaly 
                could be a clue to a larger security breach.
              </p>
            </div>
          </div>

          {/* Paragraph 2 - Current Focus */}
          <div className="gradient-border p-6 lg:p-8">
            <div className="relative z-10">
              <span className="text-primary font-mono text-sm mb-4 block">02 // Current Focus</span>
              <p className="text-muted-foreground leading-relaxed">
                Today, I specialize in vulnerability management and security architecture, helping 
                organizations identify and mitigate risks before they become breaches. My work involves 
                conducting thorough security assessments, implementing robust defense strategies, and 
                staying ahead of emerging threats. I believe that effective security is not just about 
                tools — it's about understanding the human element and building a security-aware culture.
              </p>
            </div>
          </div>

          {/* Paragraph 3 - AI & Future */}
          <div className="gradient-border p-6 lg:p-8">
            <div className="relative z-10">
              <span className="text-primary font-mono text-sm mb-4 block">03 // AI & The Future</span>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about leveraging artificial intelligence to enhance security operations. 
                From automating threat detection to using machine learning for anomaly analysis, I 
                explore how AI can augment human capabilities in the cybersecurity domain. My goal is 
                to bridge the gap between traditional security practices and cutting-edge AI solutions, 
                creating smarter, more adaptive defense mechanisms for the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <a 
            href="#experience" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <span>See my experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
