'use client';

import Image from 'next/image';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <main className="flex flex-col gap-12 items-center justify-center min-h-screen">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <form
        className="flex flex-col gap-4 items-center justify-center w-full max-w-md p-12 mx-auto bg-white rounded-md shadow-md"
        onSubmit={handleOnSubmit}
      >
        <div>
          <h2 className="mb-4 text-2xl font-bold">Recuperar senha</h2>
          <p className="mb-4 text-base font-extralight">
            Preencha o campo de E-mail
          </p>
        </div>
        <Input type="text" placeholder="Email ou número de celular" />
        <Button text="Enviar" />
        <span
          onClick={() => router.push('/')}
          className="text-base cursor-pointer"
        >
          Iniciar sessão
        </span>
      </form>
    </main>
  );
}
