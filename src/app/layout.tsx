import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { CommandPalette } from '@/components/ui/command-palette';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adna Fika Agestifanka - Portfolio',
  description: 'Principal Frontend Engineer specializing in modern web technologies, AI integration, and scalable applications.',
  keywords: ['Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'AI', 'Web Development'],
  authors: [{ name: 'Adna Fika Agestifanka' }],
  creator: 'Adna Fika Agestifanka',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adnafika.com',
    title: 'Adna Fika Agestifanka - Portfolio',
    description: 'Principal Frontend Engineer specializing in modern web technologies, AI integration, and scalable applications.',
    siteName: 'Adna Fika Agestifanka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adna Fika Agestifanka - Portfolio',
    description: 'Principal Frontend Engineer specializing in modern web technologies, AI integration, and scalable applications.',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <CommandPalette />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}