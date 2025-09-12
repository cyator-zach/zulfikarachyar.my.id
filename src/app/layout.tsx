import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Zulfikar Achyar | Cloud & DevOps Enthusiast',
  description: 'Personal portfolio website of Zulfikar Achyar, a fresh graduate Computer Engineering with a passion for Cloud Computing and DevOps. Explore my projects and experience.',
  keywords: ['Zulfikar Achyar', 'Cloud Engineer', 'DevOps', 'Portfolio', 'Fresh Graduate', 'Computer Engineering'],
  authors: [{ name: 'Zulfikar Achyar' }],
  creator: 'Zulfikar Achyar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
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
