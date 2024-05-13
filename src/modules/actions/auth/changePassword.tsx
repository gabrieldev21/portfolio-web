'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import api from '@service/api';
import { errorApproach } from '@modules/actions/error';

export default async function changePassword(_: any, change: FormData) {
  const old_password = change.get('old_password');
  const new_password = change.get('new_password');
  const new_password2 = change.get('new_password2');

  try {
    await api.put(
      '/user/change-password/',
      {
        old_password,
        new_password,
        new_password2,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies().get('access')?.value}`,
        },
      }
    );
    redirect('/login');
  } catch (error: any) {
    return errorApproach(error);
  }
}
