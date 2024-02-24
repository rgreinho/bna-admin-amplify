'use client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';


Amplify.configure(awsExports, { ssr: true });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Authenticator.Provider>
          {children}
        </Authenticator.Provider>
      </body>
    </html>
  );
}


export default RootLayout;
