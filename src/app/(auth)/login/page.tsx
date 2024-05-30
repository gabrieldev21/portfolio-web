import { Form, Input } from '@/components';
import loginUser from '@actions/auth/loginUser';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <main className={styles.main}>
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
