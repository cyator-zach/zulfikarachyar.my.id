import { navLinks } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
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
