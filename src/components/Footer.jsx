/**
 * ============================================
 * FOOTER COMPONENT
 * ============================================
 * Simple footer with copyright and quick links
 * ============================================
 */

import { Shield, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>© {currentYear} Mrittika Prakash. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>and security in mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
