"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const title = "Fresh Graduate";
const subtitle1 = "Software Engineer";
const subtitle2 = "&";
const subtitle3 = "DevOps Enthusiast";

const sentence = {
  hidden: { opacity: 1 },
  visible: (i: number = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.5 },
  }),
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export function HeroSection() {
  return (
    <section id="home" className="relative section-padding pt-32 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <DotLottieReact
          src="https://lottie.host/3e4b4e8c-dab3-4a26-83b4-b738062d8174/orEDc0Gynk.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
       <div className="absolute inset-0 bg-background/60 dark:bg-background/80 z-[1]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground !leading-tight"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {title.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
              <br />
              <span className="text-primary">
                {subtitle1.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </span>
              {' '}
              {subtitle2.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
              <br />
              {subtitle3.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
               <motion.span
                variants={cursorVariants}
                animate="blinking"
                className="inline-block text-primary"
              >
                .
              </motion.span>
            </motion.h1>
            
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
