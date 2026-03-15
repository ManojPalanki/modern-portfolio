"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Professional Data Analyst Portfolio",
    description:
      "A professional portfolio website designed for a data analyst to showcase projects, case studies, and resume. Built with Next.js and Tailwind CSS with smooth dark/light mode toggle.",
    image: "/project-portfolio.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoLink: "https://manojpalanki.vercel.app/",
  },
  {
    title: "Digital Marketing Agency Website",
    description:
      "A full-scale digital marketing & web development agency website featuring service pages, a Book Consultation CTA, and polished corporate branding.",
    image: "/project-agency.png",
    tags: ["WordPress", "Digital Marketing", "SEO"],
    demoLink: "https://syspree.com/",
  },
  {
    title: "Premium Restaurant Landing Page",
    description:
      "A modern, premium restaurant landing page with a dark elegant theme, golden accents, dish showcase cards, and a reservation flow. Designed for a premium dining brand.",
    image: "/project-restaurant.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://manojpalanki.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">My Work</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            Featured Projects
          </h2>
          <p className="text-dyn-2 max-w-xl mx-auto text-base">
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
              className="bg-card-dynamic rounded-2xl overflow-hidden shadow-lg border border-dynamic
                flex flex-col group card-hover"
            >
              {/* Project Image */}
              <div className="w-full h-52 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold font-poppins text-dyn-1 mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-dyn-2 text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* CTA */}
                <div className="mt-auto">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" className="w-full flex items-center justify-center gap-2 py-2.5 text-sm btn-glow">
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
