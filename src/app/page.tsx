import { redirect } from 'next/navigation';
import { getCurrentUser } from 'aws-amplify/auth';


async function Page() {
  try {
    await getCurrentUser();
    redirect('/dashboard');
  } catch (err) {
    redirect('/login');
  }
}


export default Page;
