'use server'

import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export async function checkAuth() {
  const session = await getSession();
  
  if (!session) {
    redirect('/login');
  }
  
  return session;
}
