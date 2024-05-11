import Image from 'next/image';

import { Form, Input } from '@/components';
import registerUser from '@actions/auth/registerUser';

export default function Register() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[84vh]">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <Form
        label="Crie sua conta"
        secondLabel="preencha seus dados"
        firstSpan="Já possuo login"
        firstRouterPush="/login"
        action={registerUser}
        buttonText="Cadastrar"
      >
        <Input id="name" name="name" type="text" placeholder="Nome" />
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
        <Input
          id="password2"
          name="password2"
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form>
    </main>
  );
}
