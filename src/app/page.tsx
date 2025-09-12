import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { PortfolioSection } from '@/components/sections/portfolio';
import { ExperienceSection } from '@/components/sections/experience';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 blur-[100px]"></div>
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="py-8 bg-transparent">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Zulfikar Achyar. All rights reserved.</p>
          <p className="mt-1">Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
