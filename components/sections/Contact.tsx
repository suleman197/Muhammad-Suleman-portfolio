'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GlassCard } from '@/components/animations/GlassCard';
import { GlowButton } from '@/components/animations/GlowButton';
import { GradientText } from '@/components/animations/GradientText';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/suleman197', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-suleman52/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sulemanmunir6752@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/923032951823', label: 'WhatsApp' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 relative" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s <GradientText>Connect</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg">Let&apos;s build something amazing together</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ScrollReveal delay={0.1}>
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2 glow-purple hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground text-lg">
                  I&apos;m always interested in hearing about new projects and opportunities.
                </p>

                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a
                      href="mailto:sulemanmunir6752@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      sulemanmunir6752@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div>
                <h4 className="font-bold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, i) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg glass text-primary hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
