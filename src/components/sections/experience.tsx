import { Section } from '@/components/section';
import { experiences } from '@/lib/placeholder-data';
import { Briefcase } from 'lucide-react';

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-gradient-to-b from-slate-900/10 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">
                My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
                I'm passionate about learning and growing. Here's a summary of my journey so far.
            </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" aria-hidden="true"></div>

          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-start"
              >
                {/* Dot and connecting line (for larger screens) */}
                <div
                  className={`hidden md:flex justify-center ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                  }`}
                >
                  <div className="relative w-full">
                    <div className="absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                    <div className="absolute left-1/2 top-7 w-1/2 h-0.5 bg-border"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div
                  className={`space-y-2 p-6 rounded-lg bg-background/80 backdrop-blur-sm border shadow-md md:shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 ${
                    index % 2 === 0
                      ? 'md:col-start-2 text-left'
                      : 'md:col-start-1 md:text-right'
                  }`}
                >
                    <div className={`flex items-center gap-4 ${index % 2 !== 0 && 'md:justify-end'}`}>
                        <Briefcase className="w-8 h-8 text-primary md:hidden" />
                        <div>
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
