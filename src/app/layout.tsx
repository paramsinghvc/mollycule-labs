import type { Metadata } from 'next';
import { Parkinsans } from 'next/font/google';
import { Fira_Code } from 'next/font/google';

import './globals.css';
import Script from 'next/script';
import Analytics from '@/components/analytics';
import Head from 'next/head';

const parkinsans = Parkinsans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-parkinsans',
});

export const metadata: Metadata = {
  title: 'Mollycule Labs',
  description: 'Mollycule Labs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Legacy fallback for non-SVG browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Primary SVG favicon for modern browsers */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" type="image/svg+xml" />
      </Head>
      <body className={`${parkinsans.variable} font-sans antialiased`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WYDZBVJ770"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WYDZBVJ770');
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
