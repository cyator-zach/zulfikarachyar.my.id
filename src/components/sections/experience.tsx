import { Section } from '@/components/section';
import { experiences } from '@/lib/placeholder-data';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ExperienceSection() {
  return (
    <Section id="experience" className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-animated-blur -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                A summary of my professional journey and key accomplishments so far.
            </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background/70 backdrop-blur-sm border shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30">
              <CardHeader className="flex flex-row justify-between items-start gap-4 pb-4">
                <div>
                  <CardTitle className="text-xl font-bold">{exp.position}</CardTitle>
                  <p className="font-semibold text-primary mt-1">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="text-nowrap">{exp.duration}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
