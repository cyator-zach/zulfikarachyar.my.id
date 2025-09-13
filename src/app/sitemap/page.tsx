
import { Header } from "@/components/header";
import { portfolioItems, tutorialItems, navLinks } from "@/lib/placeholder-data";
import Link from "next/link";
import { ContactSection } from "@/components/sections/contact";
import { Section } from "@/components/section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Zulfikar Achyar',
  description: 'A complete list of all pages on the Zulfikar Achyar portfolio website.',
};

export default function SitemapPage() {
  const siteUrl = 'https://zulfikarachyar.my.id'; 

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <Section id="sitemap" className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Sitemap</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete guide to the content on this website.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
              <ul className="space-y-2 list-disc list-inside text-primary">
                <li><Link href="/" className="hover:underline text-foreground">Home</Link></li>
                {navLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href.startsWith('#') ? `/${link.href}` : link.href} className="hover:underline text-foreground">
                            {link.label}
                        </Link>
                    </li>
                ))}
                <li><Link href="/sitemap" className="hover:underline text-foreground">Sitemap</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Portfolio Projects</h2>
              <ul className="space-y-2 list-disc list-inside text-primary">
                {portfolioItems.map(item => (
                  <li key={item.id}>
                    <Link href={`/portfolio/${item.id}`} className="hover:underline text-foreground">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Tutorials & Articles</h2>
               <ul className="space-y-2 list-disc list-inside text-primary">
                {tutorialItems.map(item => (
                  <li key={item.id}>
                    <Link href={`/tutorials/${item.id}`} className="hover:underline text-foreground">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <ContactSection />
       <footer className="py-8 bg-slate-900">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="mb-2">&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
          <Link href="/sitemap" className="hover:underline text-sm text-slate-400">
            Sitemap
          </Link>
        </div>
      </footer>
    </div>
  );
}
