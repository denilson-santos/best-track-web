import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import * as Styles from '@styles/index';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Best Track - Home</title>
      <meta name="description" content="Best Track" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Styles.Container>
      <Styles.Main>
        <Styles.Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Styles.Title>
      </Styles.Main>
    </Styles.Container>
  </>
);

export default Home;
