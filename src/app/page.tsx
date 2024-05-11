import { Header } from '@/components';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Portfolio Home',
};

export default function Home() {
  if (!cookies().has('access')) redirect('/login');

  return (
    <>
      <Header />
      <main className="flex-col sm:flex-row justify-center pt-8 max-h-screen max-w-screen">
        <section className="flex flex-col text-white">
          <span>Profile portfólio.</span>
        </section>
      </main>
    </>
  );
}
