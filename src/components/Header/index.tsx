'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useLogout from '@/hooks/useLogout';
import styles from './styles.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <section className={styles.section}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/homeLogo.svg"
              alt="foto da logo portfolioManager"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </section>
      <nav
        className={`${styles.nav} ${menuOpen ? styles.flex : styles.hidden}`}
      >
        <Link className={styles.navLink} href="/">
          Destaques
        </Link>
        <Link className={styles.navLink} href="/">
          Explorar
        </Link>
        <Link className={styles.navLink} href="/">
          Procurar
        </Link>
        <Link className={styles.navLink} href="/">
          Notificação
        </Link>
        <Link className={styles.navLink} href="/changePassword">
          Trocar senha
        </Link>
        <form action={useLogout} className={styles.form}>
          <button className={styles.logoutButton}>Logout</button>
        </form>
      </nav>
      <div className={styles.mobileMenu}>
        <button className={styles.menuButton} onClick={handleMenuToggle}>
          {!menuOpen ? 'Menu' : 'Fechar'}
        </button>
      </div>
    </header>
  );
};
