"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dynamic"
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col space-y-7"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="section-label">Available for Work</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-dyn-1 leading-[1.15]"
          >
            Hi, I&apos;m Manoj
            <br />
            <span className="gradient-text">Frontend Developer</span>
            <br />
            <span className="text-dyn-2 text-2xl md:text-3xl lg:text-4xl font-semibold">
              Building Modern &amp; High-Performance Websites
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-dyn-2 max-w-lg leading-relaxed"
          >
            I build modern, responsive websites that help students and
            professionals showcase their skills and stand out online.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto btn-glow">
                View Projects
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-1"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold font-poppins text-lg">10+</span>
              <span className="text-dyn-2 text-sm">Projects Built</span>
            </div>
            <div className="w-px h-5 bg-border-dynamic opacity-60" style={{ backgroundColor: 'var(--border)' }} />
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold font-poppins text-lg">3+</span>
              <span className="text-dyn-2 text-sm">Years Learning</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glow rings */}
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-primary/25 to-secondary/25 blur-3xl" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-dashed border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border border-secondary/20"
          />

          {/* Circular photo */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/30 z-10">
            <Image
              src="/hero-profile.png"
              alt="Manoj Palanki"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{ delay: 0.8, duration: 0.5, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-right-6 z-20
              bg-card-dynamic border border-dynamic rounded-2xl px-5 py-3 shadow-xl backdrop-blur-sm"
          >
            <p className="text-primary font-bold text-xl font-poppins leading-none">Open to</p>
            <p className="text-dyn-2 text-xs font-medium mt-0.5">New Opportunities</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 pointer-events-none" />
    </section>
  );
};
