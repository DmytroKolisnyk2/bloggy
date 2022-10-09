import { Layout } from '@components/layout';
import type { NextPageContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async (ctx: NextPageContext) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};

const PostsPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('home:headline')}>
      <h1>{t('home:headline')}</h1>
      <p>{t('home:text')}</p>
    </Layout>
  );
};
export default PostsPage;
