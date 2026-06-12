'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MagneticButton({ children, onClick, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDistance = 150;

      if (distance < maxDistance) {
        const moveX = (distX / distance) * (maxDistance - distance) * 0.3;
        const moveY = (distY / distance) * (maxDistance - distance) * 0.3;

        ref.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        ref.current.style.transform = 'translate(0, 0)';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`cursor-pointer transition-transform duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
