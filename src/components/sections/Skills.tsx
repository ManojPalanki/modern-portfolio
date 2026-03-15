"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  { name: "HTML",             icon: FaHtml5,        color: "text-orange-500" },
  { name: "CSS",              icon: FaCss3Alt,       color: "text-blue-500"  },
  { name: "JavaScript",       icon: FaJs,            color: "text-yellow-400"},
  { name: "React",            icon: FaReact,         color: "text-cyan-400"  },
  { name: "Next.js",          icon: SiNextdotjs,     color: "text-dyn-1"     },
  { name: "Tailwind CSS",     icon: SiTailwindcss,   color: "text-teal-400"  },
  { name: "Git",              icon: FaGitAlt,        color: "text-red-500"   },
  { name: "Figma / UI Design",icon: SiFigma,         color: "text-pink-500"  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            My Skills
          </h2>
          <p className="text-dyn-2 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center justify-center p-6 bg-dynamic rounded-2xl border border-dynamic shadow-md hover:shadow-primary/20 transition-all duration-300 group"
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
    </section>
  );
};
