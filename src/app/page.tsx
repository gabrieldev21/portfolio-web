import Link from 'next/link';

import { Header } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-col sm:flex-row items-center pt-8 justify-evenly max-h-screen max-w-screen">
        <section className="flex flex-col text-white">
          <Link href="/login">Back to Login</Link>
          <span>Monte o seu próprio portfólio.</span>
        </section>
      </main>
    </>
  );
}
