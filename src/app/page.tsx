
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { Header } from '@/components/header';
import { ScrollAnimationWrapper } from '@/components/scroll-animation';
import Link from 'next/link';
import { getPortfolioItems, getExperiences } from '@/lib/data-service';

export default async function Home() {
  const portfolioItems = await getPortfolioItems();
  const experiences = await getExperiences();

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <ScrollAnimationWrapper>
          <HeroSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper animation="slide-up">
          <AboutSection />
        </ScrollAnimationWrapper>
        <PortfolioSection items={portfolioItems} />
        <ScrollAnimationWrapper animation="slide-up">
          <ExperienceSection experiences={experiences} />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ContactSection />
        </ScrollAnimationWrapper>
      </main>
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="mb-2">&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
