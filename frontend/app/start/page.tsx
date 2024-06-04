import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import StartPageComponent from '@/components/start-page';

export default async function StartPage() {
  const session = await auth();
  console.log("AG:: inside start page func")

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <StartPageComponent />
    </div>
  );
}
