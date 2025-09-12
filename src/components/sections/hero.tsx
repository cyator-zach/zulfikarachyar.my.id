"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section id="home" className="relative section-padding bg-background overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-secondary/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-0"></div>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground !leading-tight">
              Fresh Graduate
              <br />
              <span className="text-primary">Cloud Engineer</span> &
              <br />
              DevOps Enthusiast
            </h1>
            
            <p className="mt-6 max-w-xl text-muted-foreground mx-auto md:mx-0 text-lg">
              A passionate Computer Engineering graduate ready to build and optimize the cloud infrastructure of the future.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#portfolio">My Work</a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt="Professional profile picture"
                  fill
                  className="rounded-3xl object-cover shadow-2xl"
                  data-ai-hint={profileImage.imageHint}
                  priority
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              )}
               <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-gradient-to-r from-teal-400 to-amber-400 rounded-full -z-10 filter blur-xl opacity-50 animate-pulse"></div>
               <div className="absolute -top-5 -left-5 w-32 h-32 bg-primary/20 rounded-lg -z-10 transform rotate-12 filter blur-xl opacity-50 animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
