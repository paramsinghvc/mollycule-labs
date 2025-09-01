import type { Metadata } from 'next';
import { Parkinsans } from 'next/font/google';
import { Fira_Code } from 'next/font/google';

import './globals.css';
import Script from 'next/script';

const parkinsans = Parkinsans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose what you need
  variable: '--font-parkinsans',
});

// app/layout.tsx

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['400', '500'] });

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
      </body>
    </html>
  );
}
