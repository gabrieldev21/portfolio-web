'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useLogout from '@/hooks/useLogout';

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
    <header className="flex gap-4 justify-between px-[13vw] pt-5 cursor-pointer w-full">
      <section className="hover:text-lime-500 text-white">
        <Link href="/">
          <div className="min-h-[30px] min-w-[30px]">
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
        className={`lg:flex gap-4 [&>a]:text-white ${
          menuOpen ? 'flex' : 'hidden'
        } `}
      >
        <Link className="hover:text-lime-500" href="/">
          Destaques
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Explorar
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Procurar
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Notificação
        </Link>
        <Link
          className="hover:text-lime-500 whitespace-nowrap"
          href="/changePassword"
        >
          Trocar senha
        </Link>
        <form action={useLogout}>
          <button className="m-0 p-0 text-white hover:text-lime-500">
            Logout
          </button>
        </form>
      </nav>
      <div className="lg:hidden">
        <button
          className="text-white hover:text-lime-500"
          onClick={handleMenuToggle}
        >
          {!menuOpen ? 'Menu' : 'Fechar'}
        </button>
      </div>
    </header>
  );
};
