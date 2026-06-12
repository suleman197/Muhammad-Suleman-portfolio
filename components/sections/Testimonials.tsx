'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GradientText } from '@/components/animations/GradientText';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup',
      content: 'Working with this developer was a game-changer. The attention to detail and solution-oriented approach transformed our vision into reality.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Digital Co',
      content: 'Exceptional skills and professionalism. Delivered high-quality work on time and always communicated clearly throughout the project.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Founder, Creative Agency',
      content: 'The best developer I have worked with. Creates beautiful, performant solutions and truly understands user experience.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'CTO, Innovation Labs',
      content: 'Outstanding technical expertise combined with great communication. Would definitely work together again on future projects.',
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Client <GradientText>Testimonials</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg">What clients say about working with me</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="hover:glow-cyan">
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-foreground italic">
                    &quot;{testimonials[current].content}&quot;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-bold text-lg">{testimonials[current].name}</p>
                    <p className="text-primary text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoplay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                      : 'w-2 bg-white/20'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
