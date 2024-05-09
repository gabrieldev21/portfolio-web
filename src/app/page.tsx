import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Header } from '@/components';

export default function Home() {
  const cookieStore = cookies();
  if (!cookieStore.get('access')?.value) redirect('/login');

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
