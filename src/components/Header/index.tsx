import Link from 'next/link';
import Image from 'next/image';
import useLogout from '@/hooks/useLogout';

export const Header = () => {
  return (
    <main className="flex justify-between px-[13vw] pt-5 [&>*]:cursor-pointer w-full">
      <section className="[&>a]:hover:text-lime-500 text-white">
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
        <form action={useLogout}>
          <button className="m-0 p-0 text-white hover:text-lime-500">
            Logout
          </button>
        </form>
      </section>
    </main>
  );
};
