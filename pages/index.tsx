import type { NextPageContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async (ctx: NextPageContext) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const PostsPage = () => {
  const { t } = useTranslation();

  return <h1>{t('common:main.greeting')}</h1>;
};
export default PostsPage;
