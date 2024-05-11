import Image from 'next/image';

import { Form, Input } from '@/components';
import loginUser from '@/modules/actions/auth/loginUser';

export default function Login() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[74vh]">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <Form
        label="Login"
        firstSpan="Cadastrar"
        firstRouterPush="/register"
        secondSpan="Recuperar senha"
        secondRouterPush="/recover"
        action={loginUser}
        buttonText="Iniciar Sessão"
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
      </Form>
    </main>
  );
}
