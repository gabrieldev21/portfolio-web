import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <main className="flex justify-between px-[13vw] pt-5 [&>*]:cursor-pointer ">
      <section className="[&>a]:hover:text-lime-500 text-white">
        <Link href="/">
          <Image
            src="/homeLogo.svg"
            alt="foto da logo portfolioManager"
            width={40}
            height={40}
          />
        </Link>
      </section>
      <section className="flex  gap-4 [&>a]:text-white">
        <Link className="hover:text-lime-500" href="/">
          Destaques
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Explorar
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Portfólios
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Procurar
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Notificação
        </Link>
        <Link href="/login" className="m-0 p-0 text-white hover:text-lime-500">
          Logout
        </Link>
      </section>
    </main>
  );
};
