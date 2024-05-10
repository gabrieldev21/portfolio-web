'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';
import { cookies } from 'next/headers';

export default async function loginUser(login: FormData) {
  const email = login.get('email');
  const password = login.get('password');

  try {
    const { data } = await api.post('/user/login/', {
      email,
      password,
    });

    const expiration = new Date(Date.now() + 30 * 60 * 1000);
    cookies().set('access', data.token.access, { expires: expiration });
    redirect('/');
  } catch (error: any) {
    if (error.message === 'NEXT_REDIRECT') throw error;
    console.log(error);
  }
}
