"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Startup Founder",
    text: "Manoj built my portfolio website quickly and the design looks amazing. Highly recommended for professional websites.",
    initials: "RK",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    text: "Working with Manoj was a breeze. He translated our complex Figma files into pixel-perfect Next.js code. The animations were exactly what we were looking for.",
    initials: "SJ",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Alex Dev",
    role: "Senior Engineer",
    text: "A highly talented front-end developer. His understanding of React and modern CSS is top-notch. He delivered clean, scalable code ahead of schedule.",
    initials: "AD",
    color: "from-cyan-500 to-teal-600",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-card-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mx-auto">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            What Clients Say
          </h2>
          <p className="text-dyn-2 max-w-xl mx-auto text-base">
            Real feedback from people I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dynamic rounded-[2rem] p-8 md:p-10 shadow-lg border border-dynamic
                relative card-hover flex flex-col"
            >
              {/* Background quote icon */}
              <FaQuoteLeft className="text-6xl text-primary/10 absolute top-8 right-8 pointer-events-none" />

              {/* Stars */}
              <div className="flex space-x-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-sm" />)}
              </div>

              {/* Quote */}
              <p className="text-dyn-2 italic mb-8 leading-relaxed text-base flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold font-poppins">{t.initials}</span>
                </div>
                <div>
                  <h4 className="text-dyn-1 font-bold font-poppins text-base leading-tight">{t.name}</h4>
                  <p className="text-primary text-xs font-medium mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
