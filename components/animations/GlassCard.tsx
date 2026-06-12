'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-lg p-6 transition-all duration-300',
        hover && 'hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50',
        className
      )}
    >
      {children}
    </div>
  );
}
