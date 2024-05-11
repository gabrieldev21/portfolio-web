import Image from 'next/image';

import { Form, Input } from '@components';
import changePassword from '@actions/auth/changePassword';

export const metadata = {
  title: 'Mudar senha',
};

export default function ChangePassword() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[84vh]">
      <Image
        src="/homeLogo.svg"
        alt="foto da logo portfolioManager"
        width={56}
        height={56}
      />
      <Form
        label="Crie uma nova senha"
        firstSpan="Retornar para home"
        firstRouterPush="/"
        action={changePassword}
        buttonText="Confirmar"
      >
        <Input
          id="old_password"
          name="old_password"
          type="password"
          placeholder="Senha Atual"
        />
        <Input
          id="new_password"
          name="new_password"
          type="password"
          placeholder="Senha Nova"
        />
        <Input
          id="new_password2"
          name="new_password2"
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form>
    </main>
  );
}
