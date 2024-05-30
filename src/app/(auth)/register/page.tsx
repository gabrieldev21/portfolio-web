import { Form, Input } from '@/components';
import registerUser from '@actions/auth/registerUser';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Cadastrar senha',
};

export default function Register() {
  return (
    <main className={styles.main}>
      <Form
        title="Crie sua conta"
        subtitle="preencha seus dados"
        firstRouteText="Já possuo login"
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
          id="confirm_new_password"
          name="confirm_new_password"
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form>
    </main>
  );
}
