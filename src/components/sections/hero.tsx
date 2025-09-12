"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="relative section-padding pt-32 overflow-hidden animated-gradient">
      <div className="section-container">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground !leading-tight">
              Fresh Graduate
              <br />
              <span className="text-primary">Cloud Engineer</span> &
              <br />
              DevOps Enthusiast
            </h1>
            
            <p className="mt-6 max-w-xl text-muted-foreground mx-auto text-lg">
              A passionate Computer Engineering graduate ready to build and optimize the cloud infrastructure of the future.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button asChild size="lg">
                <a href="#portfolio">My Work</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
