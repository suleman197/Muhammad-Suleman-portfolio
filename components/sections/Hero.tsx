'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlowButton } from '@/components/animations/GlowButton';
import { GradientText } from '@/components/animations/GradientText';
import { FloatingParticles } from '@/components/animations/FloatingParticles';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Muhammad Suleman Portfolio';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad_Suleman_Resume.pdf';
    link.download = 'Muhammad_Suleman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingParticles />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(124, 77, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(0, 229, 255, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.div
        className="relative z-10 container mx-auto px-4 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <GradientText>
                {text}
                <span className="animate-pulse">|</span>
              </GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Building responsive and interactive web experiences with modern technologies
            </p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:gap-8 my-12"
          >
            {[
              { number: '10+', label: 'Projects' },
              { number: '1+', label: 'Year' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass rounded-lg p-4 md:p-6"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 77, 255, 0.5)' }}
              >
                <div className="text-2xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
            >
              Download Resume
            </button>
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/10 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-primary animate-bounce" />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
