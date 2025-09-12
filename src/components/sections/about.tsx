import { Section } from '@/components/section';
import { skills } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <Section id="about" className="bg-secondary">
       <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">
            Hi, I'm Zulfikar. Nice to meet you.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
              Since beginning my journey as a student in computer engineering, I've been captivated by the power of cloud computing and automation. I'm passionate about building scalable, efficient, and reliable infrastructure. I'm actively seeking opportunities to contribute to exciting projects and grow as a cloud professional.
            </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-background/30 backdrop-blur-xl border-white/20 text-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white/20">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center gap-3 aspect-square">
                  <skill.icon className="w-10 h-10 text-primary" />
                  <span className="font-semibold text-sm">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </Section>
  );
}
