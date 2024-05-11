import Image from 'next/image';

import { Form, Input } from '@/components';
import resetPassword from '@/modules/actions/auth/resetPassword';

export default function Recover() {
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
        firstSpan="Iniciar sessão"
        firstRouterPush="/login"
        action={resetPassword}
        buttonText="Enviar"
      >
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email ou número de celular"
        />
      </Form>
    </main>
  );
}
