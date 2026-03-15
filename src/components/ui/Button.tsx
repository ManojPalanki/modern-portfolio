import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", className = "", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background px-6 py-3 text-sm md:text-base";
    
    const variants = {
      primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/25 hover:-translate-y-1",
      secondary: "border-2 border-primary text-primary hover:bg-primary/10 hover:-translate-y-1",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
