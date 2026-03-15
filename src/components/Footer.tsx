import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/manoj-palanki/",                       label: "LinkedIn"  },
  { Icon: FaGithub,    href: "https://github.com/ManojPalanki",                                   label: "GitHub"    },
  { Icon: FaXTwitter,  href: "https://x.com/manojpalanki9",                                      label: "X"         },
  { Icon: FaInstagram, href: "https://www.instagram.com/manojpalanki/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-card-dynamic py-10 border-t border-dynamic mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-dyn-2 text-sm">
          &copy; {new Date().getFullYear()} Manoj Portfolio. All rights reserved.
        </p>

        <div className="flex space-x-5 text-dyn-2">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label={label}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
