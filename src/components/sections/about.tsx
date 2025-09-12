import { Section } from '@/components/section';
import { skills } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <Section id="about" className="bg-primary text-primary-foreground">
       <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">
            Hi, I'm Zulfikar. Nice to meet you.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
              Since beginning my journey as a student in computer engineering, I've been captivated by the power of cloud computing and automation. I'm passionate about building scalable, efficient, and reliable infrastructure. I'm actively seeking opportunities to contribute to exciting projects and grow as a cloud professional.
            </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-primary/80 border-primary-foreground/20 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-background hover:text-foreground">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3 aspect-square">
                  <skill.icon className="w-10 h-10" />
                  <span className="font-semibold text-sm">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </Section>
  );
}
