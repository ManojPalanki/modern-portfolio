"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-dynamic">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-start group"
        >
          {/* Glow backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Photo */}
          <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-[2rem] overflow-hidden border border-dynamic shadow-2xl z-10">
            <Image
              src="/about-profile.png"
              alt="Manoj Palanki — About"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-4 -right-4 md:-right-6 z-20 bg-card-dynamic border border-dynamic rounded-2xl px-5 py-3 shadow-xl"
          >
            <p className="text-primary font-bold text-xl font-poppins">3+</p>
            <p className="text-dyn-2 text-xs font-medium">Years Learning</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-dyn-2 leading-relaxed text-base md:text-lg mb-10">
            <p>
              I&apos;m a passionate web developer focused on creating clean, modern,
              and high-performance websites.
            </p>
            <p>
              I enjoy transforming ideas into real digital experiences that help
              people build their personal brand online.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t border-dynamic pt-8">
            {[
              { value: "10+", label: "Projects\nCompleted"   },
              { value: "5+",  label: "Clients\nWorked With" },
              { value: "3+",  label: "Years\nLearning"      },
            ].map(({ value, label }) => (
              <div key={label}>
                <h3 className="text-3xl md:text-4xl font-bold text-primary font-poppins mb-1">
                  {value}
                </h3>
                <p className="text-dyn-2 font-medium uppercase text-xs md:text-sm whitespace-pre-line">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
