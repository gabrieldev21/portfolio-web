'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';
import { errorApproach } from '../error';
import { cookies } from 'next/headers';

export default async function loginUser(login: FormData) {
  const email = login.get('email');
  const password = login.get('password');

  try {
    const { data } = await api.post('/user/login/', {
      email,
      password,
    });

    cookies().set('access', data.token.access);

    redirect('/');
  } catch (error: any) {
    errorApproach(error);
  }
}