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
        label="Login"
        onSubmitRouterPush="/home"
        firstSpan="Cadastrar"
        firstRouterPush="/register"
        secondSpan="Recuperar senha"
        secondRouterPush="/recover"
      >
        <Input type="text" placeholder="Email ou número de celular" />
        <Input type="password" placeholder="Senha" />
        <Button text="Iniciar Sessão" />
      </Form>
    </main>
  );
}
