import { getTitle } from '@helpers';
import Head from 'next/head';
import type { FC } from 'react';
import { Header } from '@components/header';
import { Container } from '@components/primitives/container';
import type { LayoutProps } from './types';
// import { Footer } from '@components/footer';

import * as styles from './styles';

export const Layout: FC<LayoutProps> = ({ title, children }) => (
  <>
    <Head>
      <title>{getTitle(title)}</title>
    </Head>
    <Header />
    <main css={styles.main}>
      <Container>{children}</Container>
    </main>
    {/* <Footer /> */}
  </>
);
