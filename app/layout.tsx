import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FooterWrapper } from '@/components/footer-wrapper';
import { OrganizationStructuredData } from '@/components/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'EXIM Corporation | Industrial Manufacturing & Partner Networks',
    template: '%s | EXIM Corporation'
  },
  description: 'EXIM Corporation (Pvt) Ltd is a diversified Sri Lankan enterprise specializing in industrial manufacturing, partner networks, furniture supply, hospitality linen, and strategic supply solutions for international markets.',
  keywords: [
    'EXIM Corporation',
    'Industrial Manufacturing Sri Lanka',
    'Partner Networks',
    'Furniture Supply',
    'Hospitality Linen',
    'Oil and Gas Solutions',
    'Timber Manufacturing',
    'Strategic Supply Solutions',
    'International Trade',
    'Maldives',
    'Mauritius',
    'Seychelles',
    'Sri Lanka',
    'Middle East',
    'Saudi',
    'UAE',
    'Israel'
  ],
  authors: [{ name: 'EXIM Corporation' }],
  creator: 'EXIM Corporation',
  publisher: 'EXIM Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/exim-favicon.png',
    shortcut: '/exim-favicon.png',
    apple: '/exim-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eximcpl.com',
    siteName: 'EXIM Corporation',
    title: 'EXIM Corporation | Industrial Manufacturing & Partner Networks',
    description: 'Expertise across industrial manufacturing, partner networks, and strategic supply solutions for global markets.',
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
    title: 'EXIM Corporation | Industrial Manufacturing & Partner Networks',
    description: 'Expertise across industrial manufacturing, partner networks, and strategic supply solutions.',
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
        <OrganizationStructuredData />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
