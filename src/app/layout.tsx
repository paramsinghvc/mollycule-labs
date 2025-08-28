import type { Metadata } from 'next';
import { Parkinsans } from 'next/font/google';
import { Fira_Code } from 'next/font/google';

import './globals.css';

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
        {children}
      </body>
    </html>
  );
}
