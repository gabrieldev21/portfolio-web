import { Form, Input } from '@/components';
import registerUser from '@actions/auth/registerUser';

export const metadata = {
  title: 'Cadastrar senha',
};

export default function Register() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[84vh]">
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
