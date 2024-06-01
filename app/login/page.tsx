import { auth } from '@/auth'
import LoginForm from '@/components/login-form'
import { Session } from '@/lib/types'
import { redirect } from 'next/navigation'


export default async function LoginPage() {
  
  const session = (await auth()) as Session
  console.log("AG:: inside login page func")
  if (session) {
    console.log("AG:: session already there:", session)
    redirect('/start')
    
  }

  return (
    <main className="flex flex-col p-4">
      <LoginForm />
    </main>
  )
}
