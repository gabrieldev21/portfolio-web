'use client';
import Link from 'next/link';
import Image from 'next/image';
import useLogout from '@/hooks/useLogout';

export const Header = () => {
  return (
    <header className="w-full px-14 pt-4 lg:px-32 flex items-center justify-between">
      <section>
        <Link className="min-h-[30px] min-w-[30px]" href="/">
          <Image
            src="/homeLogo.svg"
            alt="foto da logo portfolioManager"
            width={40}
            height={40}
          />
        </Link>
      </section>

      <nav className=" [&>a]:text-white [&>a]:text-xs sm:[&>a]:text-base flex gap-4">
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
        <form
          className="text-xs sm:text-base text-white hover:text-lime-500 m-0 p-0"
          action={useLogout}
        >
          <button>Logout</button>
        </form>
      </nav>
    </header>
  );
};
