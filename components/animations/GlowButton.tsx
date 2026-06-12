'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function GlowButton({
  children,
  onClick,
  className,
  variant = 'primary',
}: GlowButtonProps) {
  const glowColor = variant === 'primary' ? 'glow-purple' : 'glow-cyan';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        'px-8 py-3 rounded-lg font-medium transition-all duration-300',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:shadow-lg'
          : 'bg-secondary text-secondary-foreground hover:shadow-lg',
        glowColor,
        className
      )}
    >
      {children}
    </motion.button>
  );
}
