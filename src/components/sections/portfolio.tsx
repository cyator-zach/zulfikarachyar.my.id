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
  type CarouselApi,
} from "@/components/ui/carousel"
import { ScrollAnimationWrapper } from '../scroll-animation';
import React from 'react';

export function PortfolioSection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative bg-secondary dark:bg-gradient-to-b dark:from-slate-900 dark:to-black">
      <Section id="portfolio" className="bg-transparent relative">
        <ScrollAnimationWrapper animation='slide-up' delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground dark:text-white">
              My Recent <span className="gradient-text">Work</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
              Here are a few projects I've worked on recently. Want to see more? <a href={`mailto:zulfikarachyar@gmail.com`} className="text-primary font-medium hover:underline">Email me</a>.
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animation='slide-left' delay={100}>
          <Carousel
            setApi={setApi}
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
                      <Card className="overflow-hidden transition-all duration-300 flex flex-col group shadow-lg hover:shadow-2xl bg-card dark:bg-slate-900/50 dark:border-white/20 h-full">
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
                          <CardTitle className="text-card-foreground dark:text-white text-xl font-bold">{item.title}</CardTitle>
                          <CardDescription className="mt-2 text-muted-foreground dark:text-slate-300 flex-grow">{item.description}</CardDescription>
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
          <div className="py-4 text-center text-sm text-muted-foreground flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current ? 'w-8 bg-primary' : 'w-2 bg-foreground/50 dark:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </Section>
    </div>
  );
}
