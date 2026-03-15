"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const socials = [
  { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/manoj-palanki/",                        label: "LinkedIn"  },
  { Icon: FaGithub,    href: "https://github.com/ManojPalanki",                                    label: "GitHub"    },
  { Icon: FaXTwitter,  href: "https://x.com/manojpalanki9",                                       label: "X"         },
  { Icon: FaInstagram, href: "https://www.instagram.com/manojpalanki/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dynamic">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-dyn-1 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-dyn-2 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s build something great. My inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="bg-card-dynamic p-8 md:p-12 rounded-[2rem] shadow-2xl border border-dynamic"
        >
          <form
            action="https://formspree.io/f/mnjgbddo"
            method="POST"
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-dyn-1 font-medium text-sm ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-dynamic border border-dynamic rounded-xl px-5 py-3 text-dyn-1 placeholder:text-dyn-2/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-dyn-1 font-medium text-sm ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-dynamic border border-dynamic rounded-xl px-5 py-3 text-dyn-1 placeholder:text-dyn-2/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-dyn-1 font-medium text-sm ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="bg-dynamic border border-dynamic rounded-xl px-5 py-3 text-dyn-1 placeholder:text-dyn-2/60 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full py-4 text-lg">
              Send Message
            </Button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-dynamic flex justify-center space-x-5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-dynamic border border-dynamic flex items-center justify-center text-dyn-2 hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
