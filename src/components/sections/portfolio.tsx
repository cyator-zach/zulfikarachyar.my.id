"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { portfolioItems } from '@/lib/placeholder-data';
import { optimizePortfolioLayout, type PortfolioLayoutOptimizationOutput } from '@/ai/flows/portfolio-layout-optimization';
import { Wand2, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function PortfolioSection() {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<PortfolioLayoutOptimizationOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleOptimizeLayout = async () => {
    setIsOptimizing(true);
    try {
      const result = await optimizePortfolioLayout({
        portfolioItems: portfolioItems.map(({ title, description, imageUrl }) => ({ title, description, imageUrl })),
      });
      setOptimizationResult(result);
      setIsDialogOpen(true);
    } catch (error) {
      console.error('Error optimizing layout:', error);
      toast({
        variant: 'destructive',
        title: 'Optimization Failed',
        description: 'An error occurred while trying to optimize the layout.',
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <Section id="portfolio" className="bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary">
            Portfolio
            <div className="w-20 h-1 bg-accent mt-2 rounded-full"></div>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Here are some of the projects I've worked on, showcasing my skills in various technologies.
          </p>
        </div>
        <Button onClick={handleOptimizeLayout} disabled={isOptimizing} className="mt-4 md:mt-0 glass-card">
          {isOptimizing ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Wand2 />
          )}
          <span className="ml-2">Layout Assistant</span>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <Card key={item.id} className="overflow-hidden transition-all duration-300 flex flex-col glass-card group hover:shadow-2xl hover:border-accent">
            <CardHeader className="p-0">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={item.imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
              <CardTitle className="text-primary text-xl font-bold">{item.title}</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground flex-grow">{item.description}</CardDescription>
              <Button variant="link" className="p-0 h-auto mt-4 self-start text-accent">
                Learn more &rarr;
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px] glass-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-primary">
              <Wand2 /> Portfolio Layout Suggestion
            </DialogTitle>
            <DialogDescription>
              Here is an AI-optimized layout suggestion for maximum visual appeal.
            </DialogDescription>
          </DialogHeader>
          {optimizationResult && (
            <div className="grid gap-4 py-4 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Suggested Layout:</h3>
                <p className="text-muted-foreground bg-black/10 p-3 rounded-md">{optimizationResult.suggestedLayout}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Reasoning:</h3>
                <p className="text-muted-foreground bg-black/10 p-3 rounded-md">{optimizationResult.reasoning}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
