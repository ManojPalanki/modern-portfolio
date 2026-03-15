"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

const categories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",       icon: FaHtml5,      color: "text-orange-500", glow: "shadow-orange-500/20" },
      { name: "CSS",        icon: FaCss3Alt,    color: "text-blue-500",   glow: "shadow-blue-500/20"   },
      { name: "JavaScript", icon: FaJs,         color: "text-yellow-400", glow: "shadow-yellow-400/20" },
      { name: "React",      icon: FaReact,      color: "text-cyan-400",   glow: "shadow-cyan-400/20"   },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "Next.js",      icon: SiNextdotjs,   color: "text-dyn-1",    glow: "shadow-slate-400/20" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", glow: "shadow-teal-400/20"  },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git",              icon: FaGitAlt, color: "text-red-500",  glow: "shadow-red-500/20"  },
      { name: "Figma / UI Design",icon: SiFigma,  color: "text-pink-500", glow: "shadow-pink-500/20" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-card-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">What I Use</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            My Tech Stack
          </h2>
          <p className="text-dyn-2 max-w-xl mx-auto text-base">
            Technologies and tools I use to build modern, high-performance web applications.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-dyn-2">{cat.label}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" style={{ borderColor: "var(--border)" }} />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-5"
              >
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className={`flex flex-col items-center justify-center p-6 bg-dynamic rounded-2xl
                      border border-dynamic shadow-md hover:shadow-xl ${skill.glow}
                      hover:border-primary/30 transition-all duration-300 group cursor-default`}
                  >
                    <skill.icon
                      className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}
                    />
                    <span className="text-dyn-1 font-medium font-poppins text-sm md:text-base text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
