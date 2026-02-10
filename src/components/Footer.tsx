import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Courses", path: "/courses" },
    { name: "Internships", path: "/internships" },
    { name: "Workshops", path: "/workshops" },
    { name: "Upskill", path: "/upskill" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "#" },
    { name: "Blog", path: "#" },
  ],
  Support: [
    { name: "Help Center", path: "#" },
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "FAQ", path: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Skill<span className="text-primary">Medha</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs text-background/60">
              Empowering students with industry-ready skills through courses, internships, and hands-on workshops.
            </p>
            <div className="space-y-2 text-sm text-background/50">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@skillmedha.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> New Delhi, India</div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm text-background/50 hover:text-primary transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">© 2026 SkillMedha. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-background/40">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
