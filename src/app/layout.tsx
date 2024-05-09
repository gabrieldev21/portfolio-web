import { Inter } from 'next/font/google';

import '@styles/globals.css';
import ReactQueryProvider from '@/utils/reactQueryProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio Home',
  description: 'Project to publish your portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen min-w-screen bg-black-blue`}
      >
        <ReactQueryProvider>
          <main className="[&>main]:flex">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
