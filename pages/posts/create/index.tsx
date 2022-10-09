import { Layout } from '@components/layout';
import { useTranslation } from 'next-i18next';
import type { NextPageContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PostForm } from '@components/post-form';

export const getStaticProps = async (ctx: NextPageContext) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'post'])),
    },
  };
};

const CreatePostPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('post:createPost')}>
      <h1>{t('post:createPost')}</h1>
      <PostForm />
    </Layout>
  );
};
export default CreatePostPage;
