
import { tutorialItems } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { ContactSection } from '@/components/sections/contact';
import { Section } from '@/components/section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimationWrapper } from '@/components/scroll-animation';
import ReactMarkdown from 'react-markdown';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tutorial = tutorialItems.find(item => item.id === params.id);

  if (!tutorial) {
    return {
      title: 'Tutorial Not Found',
    };
  }

  return {
    title: `${tutorial.title} | Zulfikar Achyar's Portfolio`,
    description: tutorial.description,
  };
}

function MoreTutorialsSection({ currentTutorialId }: { currentTutorialId: string }) {
  const recentTutorials = tutorialItems
    .filter(item => item.id !== currentTutorialId)
    .slice(0, 3);

  if (recentTutorials.length === 0) {
    return null;
  }

  return (
    <Section id="more-tutorials" className="mt-24 bg-secondary dark:bg-gradient-to-b dark:from-slate-900 dark:to-black">
       <ScrollAnimationWrapper animation='slide-up'>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground dark:text-white">
                More <span className="text-primary">Tutorials</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
                Explore other articles and guides I've written.
            </p>
        </div>
      </ScrollAnimationWrapper>
      <div className="max-w-3xl mx-auto space-y-6">
        {recentTutorials.map((item, index) => (
            <ScrollAnimationWrapper key={item.id} animation="slide-up" delay={index * 100}>
                <Link href={`/tutorials/${item.id}`} className="block group">
                <Card className="transition-all duration-300 shadow-md hover:shadow-xl bg-card dark:bg-slate-900/50 dark:border-white/20 hover:border-primary/30">
                    <CardContent className="p-6">
                      <span className="text-sm font-semibold text-primary mb-2 block">{item.category}</span>
                      <CardTitle className="text-card-foreground dark:text-white text-xl font-bold group-hover:text-primary">{item.title}</CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground dark:text-slate-300">{item.description}</CardDescription>
                       <div className="p-0 h-auto mt-4 self-start text-primary font-semibold flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                    </CardContent>
                </Card>
                </Link>
            </ScrollAnimationWrapper>
        ))}
      </div>
    </Section>
  );
}


export default function TutorialDetailPage({ params }: { params: { id: string } }) {
  const tutorial = tutorialItems.find(item => item.id === params.id);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/tutorials">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Tutorials
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tutorial.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={tutorial.authorImageUrl} alt={tutorial.author} />
                    <AvatarFallback>{tutorial.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-foreground">{tutorial.author}</span>
                </div>
                <span className="hidden md:block">|</span>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-5 w-5" />
                  <span>{format(new Date(tutorial.date), 'MMMM dd, yyyy')}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={tutorial.imageUrl}
                alt={tutorial.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1024px"
                data-ai-hint={tutorial.imageHint}
                priority
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
              <ReactMarkdown>{tutorial.content}</ReactMarkdown>
            </div>
          </article>
        </div>
         <MoreTutorialsSection currentTutorialId={tutorial.id} />
      </main>
      <ContactSection />
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

export async function generateStaticParams() {
  return tutorialItems.map((item) => ({
    id: item.id,
  }));
}
