'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GradientText } from '@/components/animations/GradientText';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 relative" id="about">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg">Software Engineering Student</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hi! I&apos;m Muhammad Suleman, a passionate Frontend Developer based in Pakistan. I&apos;m currently studying Software Engineering at Superior University and building my skills in web development.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                With over 1 year of hands-on experience, I specialize in creating clean, responsive, and user-friendly web interfaces. I focus on writing semantic HTML5 and modern CSS3 to build beautiful web experiences.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I&apos;m continuously learning and exploring new technologies to expand my development capabilities. I&apos;m particularly interested in becoming a well-rounded developer and contributing to innovative projects.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { title: 'Frontend Development', desc: 'HTML5, CSS3, Responsive Design' },
              { title: 'Web Design', desc: 'UI Layout, User Experience, Modern Design' },
              { title: 'Problem Solving', desc: 'Quick Learner, Adaptable, Creative Solutions' },
              { title: 'Teamwork', desc: 'Communication, Collaboration, Time Management' },
            ].map((skill, i) => (
              <motion.div key={i} variants={itemVariants}>
                <GlassCard>
                  <h3 className="font-bold text-primary mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
