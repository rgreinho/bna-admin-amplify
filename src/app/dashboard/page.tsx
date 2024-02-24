'use client';

import { redirect } from 'next/navigation';
import Link from 'next/link';

import {
  Card, Flex, Table, TableHead, TableRow, TableCell, TableBody,
  useTheme, useAuthenticator
} from '@aws-amplify/ui-react';


function Page() {
  const { authStatus, user, signOut } = useAuthenticator(context => [context.user]);
  const { tokens } = useTheme();

  if (authStatus !== 'authenticated') {
    return redirect('/login');
  }

  return (
    <main>
      <Card columnStart="1" columnEnd="-1" color={tokens.colors.teal[60]}>
        <Flex direction="row" justifyContent="space-between">
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </Flex>
      </Card>

      <nav>
        <ul>
          <li><Link href='/submissions'>Submissions</Link></li>
          <li><Link href='/new-analysis'>New Analysis</Link></li>
          <li><Link href='/results'>Results</Link></li>
        </ul>
      </nav>
    </main>
  );
}


export default Page;
