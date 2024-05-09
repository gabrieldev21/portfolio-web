'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';
import { errorApproach } from '../error';

export default async function registerUser(register: FormData) {
  const email = register.get('email');
  const name = register.get('name');
  const password = register.get('password');
  const password2 = register.get('password2');

  try {
    await api.post('/user/register/', {
      email,
      name,
      password,
      password2,
    });

    redirect('/');
  } catch (error: any) {
    errorApproach(error);
  }
}
