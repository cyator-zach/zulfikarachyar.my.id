import { Section } from '@/components/section';
import { skills } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <div className="relative">
      <Section id="about" className="bg-secondary">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground">
              Hi, I'm Zulfikar. Nice to meet you.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Since beginning my journey as a student in computer engineering, I've been captivated by the power of cloud computing and automation. I'm passionate about building scalable, efficient, and reliable infrastructure. I'm actively seeking opportunities to contribute to exciting projects and grow as a cloud professional.
              </p>
          </div>
      </Section>
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
