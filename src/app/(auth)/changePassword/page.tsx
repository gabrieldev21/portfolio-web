import { Form, Input } from '@components';
import changePassword from '@actions/auth/changePassword';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Mudar senha',
};

export default function ChangePassword() {
  if (!cookies().has('access')) redirect('/login');

  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[84vh]">
      <Form
        title="Crie uma nova senha"
        firstRouteText="Retornar para home"
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
          id="confirm_new_password"
          name="confirm_new_password"
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form>
    </main>
  );
}
