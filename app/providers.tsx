'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ReactElement } from 'react';
import darkTheme from './dark.theme';
import { AuthContext } from './auth/auth-context';

interface ProvidersProps {
  children: ReactElement[];
  authenticated: boolean;
}

export default function Providers({ children, authenticated }: ProvidersProps) {
  return (
    <AppRouterCacheProvider>
      <AuthContext.Provider value={authenticated}>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </AuthContext.Provider>
    </AppRouterCacheProvider>
  );
}
