'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GradientText } from '@/components/animations/GradientText';
import { Code2, Palette, Zap, Database } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Web Technologies',
      icon: Code2,
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Git', 'GitHub', 'Basic JavaScript'],
    },
    {
      title: 'Design Skills',
      icon: Palette,
      skills: ['UI Layout Design', 'Responsive Layouts', 'Web Design', 'CSS Styling', 'Visual Design', 'Form Design'],
    },
    {
      title: 'Development Tools',
      icon: Zap,
      skills: ['Code Editors', 'Browser DevTools', 'Version Control', 'Command Line', 'Problem Solving', 'Debugging'],
    },
    {
      title: 'Soft Skills',
      icon: Database,
      skills: ['Communication', 'Teamwork', 'Quick Learner', 'Time Management', 'Adaptability', 'Creativity'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 relative" id="skills">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText>Skills</GradientText> & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">Technologies and abilities I&apos;ve developed</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <ScrollReveal delay={i * 0.1}>
                  <GlassCard className="hover:glow-purple">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <motion.span
                          key={j}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(124, 77, 255, 0.2)' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </GlassCard>
                </ScrollReveal>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
