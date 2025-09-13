"use client";

import { useState } from 'react';
import { navLinks } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Code, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 bg-background/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Code className="w-6 h-6 text-primary" />
          <span className="animated-gradient-text">Zulfikar Achyar</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref legacyBehavior>
              <Button variant="ghost" as="a">{link.label}</Button>
            </Link>
          ))}
           <Link href="#contact" passHref legacyBehavior>
             <Button asChild>
                <a>Hire Me</a>
              </Button>
           </Link>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden mt-2 rounded-xl bg-background/50 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col items-center p-4 space-y-2">
          {navLinks.map((link) => (
             <Link key={link.href} href={link.href} passHref legacyBehavior className="w-full">
                <Button variant="ghost" as="a" className="w-full" onClick={() => setIsMenuOpen(false)}>{link.label}</Button>
             </Link>
          ))}
          <Link href="#contact" passHref legacyBehavior className="w-full">
            <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                <a>Hire Me</a>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
