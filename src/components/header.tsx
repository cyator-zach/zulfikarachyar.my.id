import { navLinks } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 bg-background/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Code className="w-6 h-6 text-primary" />
          <span>Zulfikar Achyar</span>
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
           <Button asChild>
              <a href="#contact">Hire Me</a>
            </Button>
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
}
