import Image from 'next/image';

import { Button, Form, Input } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center min-h-screen">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <Form
        label="Crie sua conta"
        secondLabel="preencha seus dados"
        onSubmitRouterPush="/home"
        firstSpan="Já possuo login"
        firstRouterPush="/"
      >
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="Email ou número de celular" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirmar Senha" />
        <Button text="Cadastrar" />
      </Form>
    </main>
  );
}
