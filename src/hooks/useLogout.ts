'use server';
import { cookies } from 'next/headers';

export default async function useLogout() {
  cookies().delete('access');
}
