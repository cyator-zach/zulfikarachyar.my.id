import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { email, contactLinks } from '@/lib/placeholder-data';
import { Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-transparent">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline text-primary">
          Get in Touch
          <div className="w-20 h-1 bg-accent mt-2 rounded-full mx-auto"></div>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open for a chat, collaboration, or just to say hi.
          Feel free to reach out.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          {contactLinks.map((link) => (
            <Button key={link.name} asChild variant="outline" size="lg" className="w-full sm:w-auto glass-card border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-2" />
                {link.name}
              </a>
            </Button>
          ))}
        </div>
        <div className="mt-8 border-t pt-8">
            <p className="text-muted-foreground">Or email me directly at:</p>
            <a href={`mailto:${email}`} className="text-primary font-semibold text-lg hover:underline inline-flex items-center gap-2 mt-2">
                <Mail className="w-5 h-5"/>
                {email}
            </a>
        </div>
      </div>
    </Section>
  );
}
