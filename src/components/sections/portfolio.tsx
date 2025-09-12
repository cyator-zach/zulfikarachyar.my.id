"use client";

import Image from 'next/image';
import { Section } from '@/components/section';
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { portfolioItems } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function PortfolioSection() {

  return (
    <Section id="portfolio" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline text-foreground">
          My Recent Work
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Here are a few projects I've worked on recently. Want to see more? <a href={`mailto:zulfikarachyar@gmail.com`} className="text-primary font-medium hover:underline">Email me</a>.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {portfolioItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="overflow-hidden transition-all duration-300 flex flex-col group shadow-md hover:shadow-xl border h-full">
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
                  <CardContent className="p-6 flex-grow flex flex-col bg-card">
                    <CardTitle className="text-foreground text-xl font-bold">{item.title}</CardTitle>
                    <CardDescription className="mt-2 text-foreground flex-grow">{item.description}</CardDescription>
                    <Button variant="link" asChild className="p-0 h-auto mt-4 self-start text-primary font-semibold">
                      <a href="#">
                        Case Study <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Section>
  );
}
