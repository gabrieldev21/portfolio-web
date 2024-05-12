'use server';
import api from '@service/api';
import { errorApproach } from '@modules/actions/error';

export default async function profile(state: any, token: FormData) {
  try {
    const res = await api.get('/user/profile/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    return errorApproach(error);
  }
}
