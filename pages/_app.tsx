import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { wrapper } from 'store';
import { ThemeProvider } from '@providers';
import dynamic from 'next/dynamic';
import { CssBaseline } from '@mui/material';

const PageLoaderDynamic = dynamic(() => import('@components/pages-loader'));

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider>
      {getLayout(<Component {...pageProps} />)}
      <PageLoaderDynamic />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(appWithTranslation(App));
