'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';
import { errorApproach } from '@modules/actions/error';

export default async function resetPassword(_: any, reset: FormData) {
  const email = reset.get('email');

  try {
    await api.post('/user/reset-password/', {
      email,
    });

    return 'Nova senha enviada para e-mail solicitado!';
  } catch (error: any) {
    return errorApproach(error);
  }
}
