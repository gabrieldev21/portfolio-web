import { Form, Input } from '@/components';
import resetPassword from '@actions/auth/resetPassword';

export const metadata = {
  title: 'Recuperar senha',
};

export default function Recover() {
  return (
    <main className="flex flex-col gap-12 items-center justify-center h-[74vh]">
      <Form
        label="Recuperar senha"
        secondLabel="Preencha o campo de E-mail"
        firstSpan="Iniciar sessão"
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
