import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactLinks } from '@/lib/placeholder-data';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
           <h2 className="text-3xl font-bold font-headline text-foreground">
              Let's build something <span className="gradient-text">together</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently available for freelance work and open to discussing new projects.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact Details</h3>
             <p className="text-muted-foreground">zulfikarachyar@gmail.com</p>
             <div className="flex space-x-4">
                {contactLinks.map((link) => (
                  <Button key={link.name} asChild variant="outline" size="icon">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="w-5 h-5" />
                    </a>
                  </Button>
              ))}
             </div>
          </div>
        </div>
        <form className="space-y-4">
            <Input type="text" placeholder="Name" className="h-12" />
            <Input type="email" placeholder="Email" className="h-12" />
            <Textarea placeholder="Message" rows={5} />
            <Button type="submit" size="lg" className="w-full">Send Message</Button>
        </form>
      </div>
    </Section>
  );
}
