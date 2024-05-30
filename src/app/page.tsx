import { Suspense } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { Header } from '@/components';
import Loading from './loading';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Portfolio Home',
};

export default function Home() {
  // if (!cookies().has('access')) redirect('/login');

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <span>Profile portfólio.</span>
        </section>
      </main>
    </div>
  );
}
