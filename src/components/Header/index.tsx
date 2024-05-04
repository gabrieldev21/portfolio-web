// "use client";
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <main className="flex justify-between px-[13vw] pt-5 [&>*]:cursor-pointer ">
      <section className="[&>a]:hover:text-lime-500 text-white">
        <Link href="/home">
          <Image
            src="/homeLogo.svg"
            alt="foto da logo portfolioManager"
            width={40}
            height={40}
          />
        </Link>
      </section>
      <section className="flex gap-4 [&>a]:text-white">
        <Link className="hover:text-lime-500" href="/home">
          Destaques
        </Link>
        <Link className="hover:text-lime-500" href="/home">
          Explorar
        </Link>
        <Link className="hover:text-lime-500" href="/home">
          Portfólios
        </Link>
        <Link className="hover:text-lime-500" href="/home">
          Procurar
        </Link>
        <Link className="hover:text-lime-500" href="/home">
          Notificação
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Logout
        </Link>
      </section>
    </main>
  );
};
