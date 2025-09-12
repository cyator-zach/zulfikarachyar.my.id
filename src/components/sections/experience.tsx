import { Section } from '@/components/section';
import { experiences } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-gradient-to-b from-blue-50 to-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            My Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm passionate about learning and growing. Here's a summary of my journey so far.
          </p>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{exp.position}</CardTitle>
                  <CardDescription className="flex justify-between items-center text-foreground">
                    <span>{exp.company}</span>
                    <span className="font-medium">{exp.duration}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-full aspect-square">
            <Image 
              src="https://picsum.photos/seed/experience/800/800"
              alt="Decorative abstract image"
              fill
              className="rounded-3xl object-cover"
              data-ai-hint="abstract technology"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
