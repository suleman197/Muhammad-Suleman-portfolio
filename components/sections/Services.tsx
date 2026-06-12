'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GradientText } from '@/components/animations/GradientText';
import { Tilt3DCard } from '@/components/animations/Tilt3DCard';
import { Code, Smartphone, Palette, Rocket, BarChart3 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Pages',
      description: 'Custom HTML and CSS web pages built with clean, semantic code',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that work seamlessly across all devices',
    },
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Beautiful interfaces with optimal user experience and visual hierarchy',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimized layouts and fast-loading websites for better experience',
    },
    {
      icon: BarChart3,
      title: 'Layout Design',
      description: 'Professional page layouts, forms, and interactive components',
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
    <section className="py-20 md:py-32 relative" id="services">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GradientText>Services</GradientText> I Offer
            </h2>
            <p className="text-muted-foreground text-lg">Comprehensive solutions for your digital needs</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} variants={itemVariants}>
                <ScrollReveal delay={i * 0.05}>
                  <Tilt3DCard className="h-full">
                    <GlassCard className="h-full hover:glow-cyan">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="mb-4 inline-block"
                      >
                        <Icon className="w-8 h-8 text-secondary" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </GlassCard>
                  </Tilt3DCard>
                </ScrollReveal>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
