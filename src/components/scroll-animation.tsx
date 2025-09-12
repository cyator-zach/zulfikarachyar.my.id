"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up";
  delay?: number;
}

export function ScrollAnimationWrapper({
  children,
  className,
  animation = "fade-in",
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(element);
          }, delay);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  const animationClass = animation === "slide-up" ? "slide-up-animate" : "section-animate";

  return (
    <div
      ref={ref}
      className={cn(animationClass, isVisible && "is-visible", className)}
    >
      {children}
    </div>
  );
}
