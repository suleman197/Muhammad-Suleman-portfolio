'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 relative border-t border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div className="text-muted-foreground">
            <p>&copy; {currentYear} Muhammad Suleman. All rights reserved.</p>
            <p>Crafted with passion and modern web technologies</p>
          </div>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </footer>
  );
}
