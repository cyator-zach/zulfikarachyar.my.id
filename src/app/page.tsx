import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="py-8 bg-secondary/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} PersonaPage. All rights reserved.</p>
          <p className="mt-1">Dibuat dengan Next.js dan Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
