import { Inter } from 'next/font/google';

import { Footer } from '@/components';
import '@styles/globals.css';

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
      <body
        className={`${inter.className} min-h-screen min-w-screen flex flex-col gap-4 justify-between  bg-black-blue`}
      >
        <main className="[&>main]:flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
