import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import * as Styles from '@styles/index';
import { Button } from '@components/Button';

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
          <br />
          <Button>Primary</Button>
          <Button>Secondary</Button>
          <Button>Success</Button>
          <Button>Error</Button>
          <Button>Warning</Button>
          <Button>Info</Button>
        </Styles.Title>
      </Styles.Main>
    </Styles.Container>
  </>
);

export default Home;
