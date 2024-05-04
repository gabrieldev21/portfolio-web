import { Header } from '@/components';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  // const authenticated = false;
  // if (!authenticated) redirect('/');

  return (
    <>
      <Header />
      <main className="flex-col sm:flex-row items-center pt-8 justify-evenly max-h-screen max-w-screen">
        <section className="flex flex-col text-white">
          <Link href="/">Back to Login</Link>
          <span>Monte o seu próprio portfólio.</span>
        </section>
      </main>
    </>
  );
}
