import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'EXIM Corporation | Industrial Manufacturing & Global Sourcing',
    template: '%s | EXIM Corporation'
  },
  description: 'EXIM Corporation (Pvt) Ltd is a diversified Sri Lankan enterprise specializing in industrial manufacturing, global sourcing, furniture supply, hospitality linen, and strategic supply solutions across the Indian Ocean region.',
  keywords: ['EXIM Corporation', 'Industrial Manufacturing Sri Lanka', 'Global Sourcing', 'Furniture Supply', 'Hospitality Linen', 'Oil and Gas Solutions', 'Timber Manufacturing', 'Strategic Supply Solutions', 'Indian Ocean Trade'],
  authors: [{ name: 'EXIM Corporation' }],
  creator: 'EXIM Corporation',
  publisher: 'EXIM Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eximcpl.com',
    siteName: 'EXIM Corporation',
    title: 'EXIM Corporation | Industrial Manufacturing & Global Sourcing',
    description: 'Expertise across industrial manufacturing, global sourcing, and strategic supply solutions for the Indian Ocean region.',
    images: [
      {
        url: '/exim-logo.png',
        width: 800,
        height: 600,
        alt: 'EXIM Corporation Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EXIM Corporation | Industrial Manufacturing & Global Sourcing',
    description: 'Expertise across industrial manufacturing, global sourcing, and strategic supply solutions.',
    images: ['/exim-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
