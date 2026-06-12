'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GradientText } from '@/components/animations/GradientText';
import { Tilt3DCard } from '@/components/animations/Tilt3DCard';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Student Registration Form',
      description: 'Clean and responsive registration form built with HTML and CSS',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Quiz Web Page',
      description: 'Interactive quiz application with multiple choice questions',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Responsive Portfolio',
      description: 'Modern portfolio website with mobile-first responsive design',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'E-Commerce Product Page',
      description: 'Product showcase page with responsive grid and hover effects',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Landing Page Design',
      description: 'Modern landing page with clean typography and color scheme',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Contact Form',
      description: 'Fully styled contact form with form validation styling',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Navigation Menu',
      description: 'Responsive navigation menu with dropdown and mobile menu',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Blog Layout',
      description: 'Blog page layout with cards and responsive grid system',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'Footer Component',
      description: 'Professional footer with links, social media, and sitemap',
      link: '#',
      github: 'https://github.com/suleman197',
    },
    {
      title: 'About Us Page',
      description: 'Company about page with team section and company values',
      link: '#',
      github: 'https://github.com/suleman197',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 relative" id="projects">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <GradientText>Projects</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg">Showcasing my work and web development skills</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ScrollReveal delay={i * 0.05}>
                <Tilt3DCard className="h-full">
                  <GlassCard className="h-full hover:glow-lg flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-6">{project.description}</p>
                    </div>
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <motion.a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">View</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    </div>
                  </GlassCard>
                </Tilt3DCard>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
