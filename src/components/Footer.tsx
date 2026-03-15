import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const socials = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/manoj-palanki/", label: "LinkedIn" },
  { Icon: FaGithub,   href: "https://github.com/ManojPalanki",            label: "GitHub"   },
  { Icon: FaXTwitter, href: "https://x.com/manojpalanki9",               label: "Twitter"  },
];

export const Footer = () => {
  return (
    <footer className="bg-card-dynamic border-t border-dynamic">
      <div className="container mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold font-poppins text-primary tracking-tight">MP.</span>
          <p className="text-dyn-2 text-sm">
            &copy; 2026 Manoj Portfolio. All rights reserved.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-dynamic border border-dynamic flex items-center justify-center
                text-dyn-2 hover:text-primary hover:border-primary/50 hover:-translate-y-1
                transition-all duration-300 shadow-sm"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
