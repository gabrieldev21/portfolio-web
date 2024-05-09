'use server';
import { redirect } from 'next/navigation';

import api from '@service/api';

export default async function changePassword(change: FormData) {
  const oldPassword = change.get('oldPassword');
  const newPassword = change.get('newPassword');
  const newPassword2 = change.get('newPassword2');

  try {
    await api.put('/user/change-password/', {
      oldPassword,
      newPassword,
      newPassword2,
    });

    redirect('/');
  } catch (error: any) {
    if (error.message === 'NEXT_REDIRECT') throw error;
    console.log(error);
  }
}
