"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dynamic"
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-dyn-1 leading-tight">
            Hi, I&apos;m Manoj <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Web Developer & <br className="hidden md:block" /> Digital Creator
            </span>
          </h1>
          <p className="text-lg text-dyn-2 max-w-lg leading-relaxed">
            I build modern, responsive websites that help people showcase their
            work and grow their careers.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href="#projects" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto">
                View Projects
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glow rings */}
          <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-primary/25 to-secondary/25 blur-2xl" />
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
        </motion.div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-40 pointer-events-none" />
    </section>
  );
};
