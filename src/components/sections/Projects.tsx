"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Data Analyst Portfolio",
    description:
      "A professional portfolio website for a Data Analyst built with Next.js and Tailwind CSS. Features skill showcases, case studies, a resume download, and a smooth dark/light mode toggle.",
    image: "/project-portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoLink: "https://manojpalanki.vercel.app/",
  },
  {
    title: "Business Agency Website",
    description:
      "A full-scale digital marketing & web development agency website for Syspree. Features service pages, a 'Book Consultation' CTA, and polished corporate branding.",
    image: "/project-agency.png",
    tags: ["WordPress", "Digital Marketing", "SEO"],
    demoLink: "https://syspree.com/",
  },
  {
    title: "Restaurant Landing Page",
    description:
      "A modern, premium restaurant landing page with dark elegant theme, golden accents, dish showcase cards, and a reservation flow. Designed for a premium dining brand.",
    image: "/project-restaurant.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://manojpalanki.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            Featured Projects
          </h2>
          <p className="text-dyn-2 max-w-2xl mx-auto">
            A selection of recent work across front-end development and UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card-dynamic rounded-2xl overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-dynamic flex flex-col group"
            >
              {/* Project Image */}
              <div className="w-full h-48 md:h-52 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-poppins text-dyn-1 mb-3">
                  {project.title}
                </h3>
                <p className="text-dyn-2 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full flex items-center gap-2 py-2.5 text-sm">
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo</span>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
