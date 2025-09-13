import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';
import { Header } from '@/components/header';
import { ScrollAnimationWrapper } from '@/components/scroll-animation';
import Link from 'next/link';

export default function Home() {
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
        <PortfolioSection />
        <ScrollAnimationWrapper animation="slide-up">
          <ExperienceSection />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ContactSection />
        </ScrollAnimationWrapper>
      </main>
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="mb-2">&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
          <Link href="/sitemap" className="hover:underline text-sm text-slate-400">
            Sitemap
          </Link>
        </div>
      </footer>
    </div>
  );
}
