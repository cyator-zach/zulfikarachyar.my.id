
import { Header } from "@/components/header";
import { navLinks } from "@/lib/static-data";
import Link from "next/link";
import { getPortfolioItems, getTutorials } from "@/lib/data-service";

export default async function SitemapPage() {
  const portfolioItems = await getPortfolioItems();
  const tutorials = await getTutorials();

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Main Pages</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
                  {navLinks.map(link => (
                     !link.href.startsWith('#') && <li key={link.href}><Link href={link.href} className="text-primary hover:underline">{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Portfolio Projects</h2>
                <ul className="list-disc list-inside space-y-2">
                  {portfolioItems.map(item => (
                    <li key={item.id}>
                      <Link href={`/portfolio/${item.id}`} className="text-primary hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Tutorials</h2>
                 <ul className="list-disc list-inside space-y-2">
                  {tutorials.map(item => (
                    <li key={item.id}>
                      <Link href={`/tutorials/${item.id}`} className="text-primary hover:underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </main>
      <footer className="py-8 bg-slate-900 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="mb-2">&copy; 2024 Zulfikar Achyar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
