import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from '@styles/global';
import { NavigationContextProvider } from 'contexts/NavigationContext';

globalStyles();

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NavigationContextProvider>
      <Component {...pageProps} />
    </NavigationContextProvider>
  );
}

export default App;
