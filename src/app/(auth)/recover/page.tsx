import { Form, Input } from '@/components';
import resetPassword from '@actions/auth/resetPassword';
import styles from './styles.module.scss';

export const metadata = {
  title: 'Recuperar senha',
};

export default function Recover() {
  return (
    <main className={styles.main}>
      <Form
        title="Recuperar senha"
        subtitle="Preencha o campo de E-mail"
        firstRouteText="Iniciar sessão"
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
