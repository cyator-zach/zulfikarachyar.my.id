import { Section } from '@/components/section';
import { skills } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <Section id="about-me" className="bg-transparent">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            About Me
            <div className="w-20 h-1 bg-accent mt-2 rounded-full"></div>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              I'm a fresh graduate from Syiah Kuala University, majoring in Computer Engineering.
              With a strong foundation in cloud computing and DevOps, I'm passionate about building scalable and efficient cloud solutions.
            </p>
            <p>
              My journey includes hands-on experience as a Cloud Computing cohort at Bangkit Academy and internships where I honed my skills in IT support and network infrastructure. I'm always eager to learn and apply new technologies to solve real-world problems.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold font-headline mb-4">Core Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="glass-card transition-all duration-300 hover:border-accent hover:shadow-2xl">
                <CardContent className="p-4 flex items-center gap-4">
                  <skill.icon className="w-8 h-8 text-accent" />
                  <span className="font-semibold text-foreground/80">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
