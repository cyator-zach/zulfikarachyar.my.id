import { Section } from '@/components/section';

export function AboutSection() {
  return (
    <Section id="about" className="bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground">
          Hi, <span className="gradient-text">I'm Zulfikar</span>. Nice to meet you.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Since beginning my journey as a student in computer engineering, I've been captivated by the power of cloud computing and automation. I'm passionate about building scalable, efficient, and reliable infrastructure. I'm actively seeking opportunities to contribute to exciting projects and grow as a cloud professional.
        </p>
      </div>
    </Section>
  );
}
