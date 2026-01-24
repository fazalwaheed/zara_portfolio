// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ui/ThemeProvider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zara Artist | Textile & Fashion Designer',
  description: 'Award-winning textile and fashion designer blending traditional craft with contemporary aesthetics.',
  keywords: 'textile design, fashion designer, embroidery, sustainable fashion, Paris',
  openGraph: {
    title: 'Zara Artist | Textile & Fashion Designer',
    description: 'Creating stories through fabric and form.',
    url: 'https://ariasinclair.design',
    siteName: 'Zara Artist Portfolio',
    locale: 'en_FR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zara Artist | Textile & Fashion Designer',
    description: 'Creating stories through fabric and form.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}