'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col gap-12 items-center justify-center min-h-screen">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <section className="flex flex-col gap-4 items-center justify-center w-full max-w-md p-12 mx-auto bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <Input type="text" placeholder="Email ou número de celular" />
        <Input type="password" placeholder="Senha" />
        <Button onClick={() => router.push('/home')}>Iniciar Sessão</Button>
        <span className="text-base cursor-pointer">Recuperar senha</span>
        <span className="text-base cursor-pointer">Cadastrar</span>
      </section>
    </main>
  );
}
