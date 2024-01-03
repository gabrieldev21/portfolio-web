import Link from 'next/link';

export const Header = () => {
  return (
    <main className="flex justify-between px-[13vw] pt-4 [&>*]:cursor-pointer ">
      <section className="[&>a]:hover:text-lime-500 text-white">
        <Link href="/">Home</Link>
      </section>
      <section className="flex gap-4 [&>a]:text-white">
        <Link className="hover:text-lime-500" href="/highlights">
          Destaques
        </Link>
        <Link className="hover:text-lime-500" href="/explore">
          Explorar
        </Link>
        <Link className="hover:text-lime-500" href="/portfolios">
          Portfólios
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Procurar
        </Link>
        <Link className="hover:text-lime-500" href="/">
          Notificação
        </Link>
      </section>
    </main>
  );
};
