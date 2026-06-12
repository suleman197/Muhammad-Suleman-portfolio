'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad_Suleman_Resume.pdf';
    link.download = 'Muhammad_Suleman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-lg font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            M.Suleman
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              className="text-sm text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            onClick={handleDownloadResume}
            className="px-3 py-1 rounded text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-card border-b border-border p-3 space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="block text-sm text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              handleDownloadResume();
              setIsOpen(false);
            }}
            className="w-full px-3 py-2 text-sm rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            Download Resume
          </button>
        </motion.div>
      )}
    </nav>
  );
}
