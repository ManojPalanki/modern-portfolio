"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Startup Founder",
    text: "Manoj built my portfolio website quickly and the design looks amazing. Highly recommended for his attention to details and professionalism.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    text: "Working with Manoj was a breeze. He translated our complex Figma files into pixel-perfect Next.js code. The animations were exactly what we were looking for.",
  },
  {
    name: "Alex Dev",
    role: "Senior Engineer",
    text: "A highly talented front-end developer. His understanding of React and modern CSS is top-notch. He delivered clean, scalable code ahead of schedule.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-card-dynamic">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dyn-1 mb-4">
            Client Testimonials
          </h2>
          <p className="text-dyn-2 max-w-2xl mx-auto">
            What people are saying about my work.
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
              className="bg-dynamic rounded-[2rem] p-8 md:p-10 shadow-lg border border-dynamic relative hover:-translate-y-2 transition-transform duration-300"
            >
              <FaQuoteLeft className="text-5xl text-primary/20 absolute top-8 right-8" />

              <div className="flex space-x-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              <p className="text-dyn-2 italic mb-8 leading-relaxed text-base md:text-lg">
                &quot;{t.text}&quot;
              </p>

              <div>
                <h4 className="text-dyn-1 font-bold font-poppins text-lg">{t.name}</h4>
                <p className="text-primary text-sm font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
