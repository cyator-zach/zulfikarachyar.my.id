import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ScrollAnimationWrapper } from './scroll-animation';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper animation="slide-up">{children}</ScrollAnimationWrapper>
      </div>
    </section>
  );
}
