import { portfolioItems } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/contact';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioItems.find(item => item.id === params.id);

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

export default function PortfolioDetailPage({ params }: { params: { id:string } }) {
  const project = portfolioItems.find(item => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/#portfolio">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
            </div>

            <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8 shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1024px"
                data-ai-hint={project.imageHint}
                priority
              />
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
                <p>{project.description}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                 <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
            </div>
          </article>
        </div>
      </main>
      <ContactSection />
      <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// This function tells Next.js which pages to pre-render at build time.
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}
