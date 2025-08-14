'use server';

import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE } from '../signup/auth-cookie';

export default async function authenticateAction() {
  const cookie = (await cookies()).get(AUTHENTICATION_COOKIE)?.value;

  return !!cookie;
}
