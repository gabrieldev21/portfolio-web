import Image from 'next/image';

import { Button, Form, Input } from '@/components';
import loginUser from '@/service/actions/auth/loginUser';

export default function Login() {
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
        onSubmitRouterPush="/login"
        firstSpan="Cadastrar"
        firstRouterPush="/register"
        secondSpan="Recuperar senha"
        secondRouterPush="/recover"
        action={loginUser}
      >
        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Email ou número de celular"
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button text="Iniciar Sessão" />
      </Form>
    </main>
  );
}
