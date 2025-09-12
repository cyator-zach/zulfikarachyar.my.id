import { Section } from '@/components/section';
import { experiences } from '@/lib/placeholder-data';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-transparent">
      <h2 className="text-3xl font-bold font-headline text-primary text-center mb-12">
        My Journey
        <div className="w-20 h-1 bg-accent mt-2 rounded-full mx-auto"></div>
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12">
            <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`p-6 rounded-lg glass-card transition-all duration-300 hover:shadow-2xl hover:border-accent ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <p className="text-sm text-accent font-semibold">{exp.duration}</p>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.position}</h3>
                  <p className="text-md font-medium text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
