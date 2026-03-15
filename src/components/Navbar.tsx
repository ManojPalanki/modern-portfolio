"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About",        href: "#about" },
  { name: "Skills",       href: "#skills" },
  { name: "Projects",     href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact",      href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [mounted, setMounted]   = useState(false);
  const { theme, setTheme }     = useTheme();

  useEffect(() => { setMounted(true); }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ── Floating Pill Navbar (Desktop) ── */}
      <div className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center px-6">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-8 px-8 py-3 rounded-full
            bg-white/10 dark:bg-white/5
            border border-white/20 dark:border-white/10
            backdrop-blur-xl shadow-2xl shadow-black/20
            ring-1 ring-inset ring-white/10"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="text-xl font-bold font-poppins text-primary tracking-tight shrink-0"
          >
            MP.
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-sm font-medium text-dyn-2 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full
                bg-white/10 dark:bg-white/5 border border-white/20
                text-dyn-2 hover:text-primary hover:border-primary/50
                transition-all duration-200 shrink-0"
            >
              {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
            </button>
          )}
        </motion.nav>
      </div>

      {/* ── Mobile Navbar ── */}
      <div className="fixed top-4 left-0 right-0 z-50 flex md:hidden justify-between items-center px-5">
        {/* Logo pill */}
        <div className="px-5 py-2.5 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-xl shadow-lg">
          <a
            href="#home"
            onClick={(e) => scrollTo(e, "#home")}
            className="text-lg font-bold font-poppins text-primary"
          >
            MP.
          </a>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 flex items-center justify-center rounded-full
                bg-white/10 dark:bg-white/5 border border-white/20
                backdrop-blur-xl shadow-lg text-dyn-2 hover:text-primary transition-colors"
            >
              {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-full
              bg-white/10 dark:bg-white/5 border border-white/20
              backdrop-blur-xl shadow-lg text-dyn-1"
          >
            {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 md:hidden
              bg-white/15 dark:bg-black/30 border border-white/20
              backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-lg font-medium text-dyn-1 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
