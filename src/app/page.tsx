import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Zulfikar Achyar. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
