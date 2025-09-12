import Image from 'next/image';
import { navLinks } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile');

  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-secondary/20 -z-10"></div>
       <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent -z-10 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-accent/10 to-transparent -z-10 opacity-50"></div>
      <div className="container mx-auto px-4">
        <header className="absolute top-0 left-0 right-0 z-10 py-4">
          <div className="container mx-auto flex justify-center md:justify-end px-4">
            <nav className="flex items-center space-x-2 bg-background/50 backdrop-blur-sm p-2 rounded-lg border border-border/50">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <div className="flex min-h-dvh items-center py-20 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start order-2 md:order-1 text-center md:text-left">
              <div>
                <p className="text-lg text-accent mb-2 font-headline">Hi there, I'm</p>
                <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">Zulfikar Achyar</h1>
                <h2 className="text-xl md:text-2xl mt-3 font-medium text-foreground/80">
                  Fresh Graduate | Cloud Engineer | DevOps Enthusiast
                </h2>
                <p className="mt-6 max-w-xl text-muted-foreground mx-auto md:mx-0">
                  A passionate Computer Engineering graduate ready to build and optimize the cloud infrastructure of the future.
                </p>
                <div className="mt-8 flex gap-4 justify-center md:justify-start">
                  <Button asChild size="lg">
                    <a href="#portfolio">View My Work</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt="Professional profile picture"
                    width={400}
                    height={400}
                    className="rounded-full object-cover shadow-2xl border-8 border-background"
                    data-ai-hint={profileImage.imageHint}
                    priority
                  />
                )}
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10 animate-pulse"></div>
                 <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-lg -z-10 transform rotate-12 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
