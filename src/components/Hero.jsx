/**
 * ============================================
 * HERO SECTION
 * ============================================
 * Main landing section with animated grid background
 * 
 * To edit content, modify the text in the JSX below
 * The grid animation is defined in index.css (.grid-pattern)
 * ============================================
 */

import { ChevronDown, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Decorative glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Terminal-style greeting */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 mb-8 animate-fade-up">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> whoami
            <span className="cursor-blink text-primary ml-1">_</span>
          </span>
        </div>

        {/* Name - Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Mrittika</span>{" "}
          <span className="text-primary text-glow">Prakash</span>
        </h1>

        {/* Role Title */}
        <h2 
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light mb-4 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Cybersecurity & AI Analyst
        </h2>

        {/* Tagline */}
        <p 
          className="text-lg md:text-xl text-primary font-medium max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Bridging forensic investigation with modern security
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/50 text-foreground font-semibold rounded-lg hover:bg-primary/10 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;