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
        label="Recuperar senha"
        secondLabel="Preencha o campo de E-mail"
        onSubmitRouterPush="/home"
        firstSpan="Iniciar sessão"
        firstRouterPush="/"
      >
        <Input type="text" placeholder="Email ou número de celular" />
        <Button text="Enviar" />
      </Form>
    </main>
  );
}
