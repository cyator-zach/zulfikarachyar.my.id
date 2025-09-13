import { Section } from '@/components/section';
import { experiences } from '@/lib/placeholder-data';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-gradient-to-b from-background to-slate-900/20 dark:to-black/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                I'm passionate about learning and growing. Here's a summary of my journey so far.
            </p>
        </div>

        <div className="relative">
          {/* Vertical line for the timeline */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center items-start pt-1.5">
                   <div className={`absolute w-4 h-4 bg-primary rounded-full z-10 ${index % 2 === 0 ? 'right-[-8.5px]' : 'left-[-7.5px]'}`}></div>
                </div>

                {/* Card Content */}
                <div
                  className={`space-y-2 p-6 rounded-xl bg-background/50 backdrop-blur-sm border shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/40 hover:scale-[1.02] 
                  ${
                    index % 2 === 0
                      ? 'md:col-start-2 text-left'
                      : 'md:col-start-1 md:text-right md:items-end'
                  }`}
                >
                    <div className={`flex items-center gap-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="flex-grow">
                            <p className="text-sm text-muted-foreground">{exp.duration}</p>
                            <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                            <p className="font-semibold text-primary">{exp.company}</p>
                        </div>
                    </div>
                  
                  <p className="text-muted-foreground pt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
