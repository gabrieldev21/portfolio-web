import { Inter } from 'next/font/google';

import { Footer } from '@/components';
import '@styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'Project to publish your portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/homeLogo.svg" />
      <body className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
