import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { email, contactLinks } from '@/lib/placeholder-data';

export const metadata: Metadata = {
  title: 'Zulfikar Achyar | Cloud & DevOps Enthusiast',
  description: 'Personal portfolio website of Zulfikar Achyar, a fresh graduate Computer Engineering with a passion for Cloud Computing and DevOps. Explore my projects and experience.',
  keywords: ['Zulfikar Achyar', 'Cloud Engineer', 'DevOps', 'Portfolio', 'Fresh Graduate', 'Computer Engineering'],
  authors: [{ name: 'Zulfikar Achyar', url: contactLinks.find(l => l.name === 'LinkedIn')?.url }],
  creator: 'Zulfikar Achyar',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Zulfikar Achyar',
  alternateName: 'Zulfikar Achyar',
  url: 'https://zulfikar-achyar.web.app', // Ganti dengan URL domain Anda nanti
  jobTitle: 'Cloud Engineer and DevOps Enthusiast',
  worksFor: {
    '@type': 'Organization',
    name: 'Self-employed'
  },
  email: email,
  sameAs: contactLinks.map(link => link.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
