"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SplitText } from "@/components/SplitText";

// Same data interface as the old TestimonialSlider — no data changes needed
export interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
}

interface CleanTestimonialProps {
  testimonials: Testimonial[];
  className?: string;
}

export function CleanTestimonial({ testimonials, className }: CleanTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorX, setCursorX] = useState(-100);
  const [cursorY, setCursorY] = useState(-100);

  const current = testimonials[activeIndex];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Track mouse for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={cn("relative w-full max-w-2xl mx-auto overflow-hidden px-4 md:px-0", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={goNext}
      style={{ cursor: "pointer" }}
    >
      {/* Custom magnetic cursor */}
      <motion.div
        className="pointer-events-none absolute z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <motion.div
          className="rounded-full bg-foreground flex items-center justify-center"
          animate={{
            width: isHovered ? 80 : 0,
            height: isHovered ? 80 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring" as const, damping: 20, stiffness: 200 }}
        >
          <motion.span
            className="text-background text-xs font-medium tracking-wider uppercase"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            Next
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Floating index indicator */}
      <motion.div
        className="absolute top-8 right-8 flex items-baseline gap-1 font-mono text-xs z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-foreground"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-muted-foreground">/</span>
        <span className="text-muted-foreground">{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews */}
      <motion.div
        className="absolute top-8 left-8 flex -space-x-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={cn(
              "w-6 h-6 rounded-full border-2 border-background overflow-hidden transition-all duration-300",
              i === activeIndex
                ? "ring-1 ring-accent ring-offset-1 ring-offset-background grayscale-0"
                : "grayscale opacity-50"
            )}
            whileHover={{ scale: 1.1, opacity: 1 }}
          >
            <img src={t.image || "/placeholder.svg"} alt={t.name} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative min-h-[400px] flex flex-col justify-center px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-[#2D7270]"
          >
            <SplitText text={current.quote} />
          </motion.blockquote>
        </AnimatePresence>

        {/* Author section with accent line */}
        <motion.div className="mt-16 relative px-4 md:px-8" layout>
          <div className="flex items-center gap-6">
            {/* Avatar container with all images stacked */}
            <div className="relative w-14 h-14 flex-shrink-0">
              <motion.div
                className="absolute -inset-2 rounded-full border border-[#2D7270]/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.img
                  key={t.image}
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-14 h-14 rounded-full object-cover"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              ))}
            </div>

            {/* Author info with accent line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-6"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2D7270]"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originY: 0 }}
                />
                <span className="block text-sm font-bold text-[#2D7270] tracking-wide">
                  {current.name}
                </span>
                <span className="block text-xs text-[#5a5e55] mt-1 font-sans uppercase tracking-widest">
                  {current.role}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-12 mx-4 md:mx-8 h-[2px] bg-[#e2e4de] relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#2D7270] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Keyboard hint */}
      <motion.div
        className="mt-6 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
          Click anywhere
        </span>
      </motion.div>
    </div>
  );
}
