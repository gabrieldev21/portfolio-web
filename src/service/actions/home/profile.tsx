'use server';
import api from '@service/api';

export default async function profile(token: FormData) {
  try {
    const res = await api.get('/user/profile/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.message;
  }
}
