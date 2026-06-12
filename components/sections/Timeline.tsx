'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GradientText } from '@/components/animations/GradientText';

export function Timeline() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc',
      description: 'Leading development of enterprise web applications with focus on performance and UX',
    },
    {
      year: '2021 - 2023',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Co',
      description: 'Built and maintained multiple production applications using React and Node.js',
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Web Design Studio',
      description: 'Developed responsive websites and learned modern development practices',
    },
    {
      year: '2019 - 2020',
      title: 'Internship',
      company: 'StartUp Hub',
      description: 'First professional experience building web applications with mentorship',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience <GradientText>Timeline</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg">Journey through my professional career</p>
          </div>
        </ScrollReveal>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ScrollReveal delay={i * 0.1}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary glow-purple"
                      whileHover={{ scale: 1.5 }}
                    />
                    {i !== experiences.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <motion.div
                      className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20"
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-sm font-bold text-secondary mb-2">{exp.year}</div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
