import React from 'react';
import type { AppProps } from 'next/app';
import { globalStyles } from '@styles/global';

globalStyles();

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
