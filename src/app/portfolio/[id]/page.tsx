
import { getPortfolioItems, getPortfolioItemById } from '@/lib/data-service';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, CalendarDays } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getPortfolioItemById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Zulfikar Achyar's Portfolio`,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: { params: { id:string } }) {
  const project = await getPortfolioItemById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/#portfolio">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
            </Link>
            <article>
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={project.author?.image_url} alt={project.author?.name} />
                            <AvatarFallback>{project.author?.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{project.author?.name}</span>
                        </div>
                        <span className="hidden md:block">|</span>
                        <div className="flex items-center space-x-2">
                        <CalendarDays className="h-5 w-5" />
                        <span>{format(new Date(project.created_at), 'MMMM dd, yyyy')}</span>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1024px"
                        data-ai-hint={project.image_hint}
                        priority
                    />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                            <h2 className="text-2xl font-semibold mt-8">The Challenge</h2>
                            <p>{project.challenge}</p>
                            <h2 className="text-2xl font-semibold mt-8">The Solution</h2>
                            <p>{project.solution}</p>
                            <h2 className="text-2xl font-semibold mt-8">Results</h2>
                            <p>{project.results}</p>
                        </div>
                    </div>
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 bg-card p-6 rounded-lg border shadow-sm">
                            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Project Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-muted-foreground">My Role</h4>
                                    <p className="font-medium">Lead Developer, DevOps</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-muted-foreground">Technologies</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-3 pt-4">
                                     <Button asChild className="w-full">
                                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                    <Button variant="outline" asChild className="w-full">
                                        <a href={project.repo_url} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> View Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
          </div>
        </div>
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

// This function tells Next.js which pages to pre-render at build time.
export async function generateStaticParams() {
  const portfolioItems = await getPortfolioItems();
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}
