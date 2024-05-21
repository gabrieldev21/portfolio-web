import { Form, Input } from '@/components';
import loginUser from '@actions/auth/loginUser';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[74vh]">
      <Form
        title="Login"
        firstRouteText="Cadastrar"
        firstRouterPush="/register"
        secondRouteText="Recuperar senha"
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
