import type { Metadata } from 'next';
import './globals.css';

import { Container, CssBaseline } from '@mui/material';
import Header from './header/header';
import Providers from './providers';
import authenticated from './auth/actions/authenticated';
import logout from './auth/logout';

export const metadata: Metadata = {
  title: 'Shoppy Store',
  description: 'Your shop where the dreams come true',
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const isAuthenticated = await authenticated();

  return (
    <html lang='en'>
      <body>
        <Providers authenticated={isAuthenticated}>
          <CssBaseline />
          {isAuthenticated ? <Header logout={logout} /> : <></>}
          <Container className={isAuthenticated ? 'mt-10' : ''}>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
