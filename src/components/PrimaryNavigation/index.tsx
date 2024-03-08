'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';

import SignoutButton from '../SignoutButton';
import styles from './styles.module.css';


function PrimaryNavigation() {
  const { authStatus, user, signOut } = useAuthenticator(context => [context.user]);
  const [selected, setSelected] = useState('submissions');

  if (authStatus !== 'authenticated') {
    return redirect('/login');
  }

  return (
    <nav aria-labelledby="primary-navigation" className={styles['nav']}>
      <ul id="primary-navigation">
        <li className={`${styles['nav-item']} ${selected === 'submissions' ? styles['selected'] : ''}`}
          onClick={() => setSelected('submissions')}
        >
          <Link href="/dashboard/submissions">Submissions</Link>
        </li>
        <li className={`${styles['nav-item']} ${selected === 'new-analysis' ? styles['selected'] : ''}`}
          onClick={() => setSelected('new-analysis')}
        >
          <Link href="/dashboard/new-analysis">New Analysis</Link>
        </li>
        <li className={`${styles['nav-item']} ${selected === 'results' ? styles['selected'] : ''}`}
          onClick={() => setSelected('results')}
        >
          <Link href="/dashboard/results">Results</Link>
        </li>
      </ul>

      <SignoutButton onClick={signOut}></SignoutButton>
    </nav>
  );
}


export default PrimaryNavigation;
