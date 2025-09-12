import { Section } from '@/components/section';
import { skills } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <Section id="about-me" className="bg-background">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <h2 className="text-3xl font-bold font-headline text-primary mb-4">
            Tentang Saya
            <div className="w-20 h-1 bg-ring mt-2 rounded-full"></div>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Saya adalah seorang Cloud & DevOps Engineer dengan pengalaman dalam merancang,
              membangun, dan mengelola infrastruktur cloud yang andal dan efisien.
              Saya memiliki keahlian mendalam dalam teknologi AWS, GCP, dan ekosistem kontainerisasi
              seperti Docker dan Kubernetes.
            </p>
            <p>
              Dengan latar belakang pengembangan Python, saya mampu menjembatani kesenjangan
              antara pengembangan perangkat lunak dan operasi, menciptakan alur kerja CI/CD
              yang mulus, dan mengotomatisasi proses untuk mempercepat siklus rilis.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold font-headline mb-4">Keahlian Utama</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-secondary/50 hover:shadow-md transition-shadow">
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
