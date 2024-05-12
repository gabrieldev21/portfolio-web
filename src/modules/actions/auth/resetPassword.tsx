'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';
import { errorApproach } from '@modules/actions/error';

export default async function resetPassword(state: any, reset: FormData) {
  const email = reset.get('email');

  try {
    await api.post('/user/reset-password/', {
      email,
    });

    redirect('/login');
  } catch (error: any) {
    return errorApproach(error);
  }
}
