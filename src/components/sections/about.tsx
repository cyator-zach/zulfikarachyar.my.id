import { Section } from '@/components/section';

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">
          Hi, <span className="gradient-text">I'm Zulfikar</span>. Nice to meet you.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Since beginning my journey as a student in computer engineering, I've been captivated by the power of software development and automation. I'm passionate about building scalable, efficient, and reliable software solutions. I'm actively seeking opportunities to contribute to exciting projects and grow as a software professional.
        </p>
      </div>
    </Section>
  );
}
