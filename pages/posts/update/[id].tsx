import { Layout } from '@components/layout';
import { PostForm } from '@components/post-form';
import { Routes } from '@enums';
import { useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { currentPostSelector, getPost } from 'store/current-post';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale, query } = ctx;
    await store.dispatch(getPost(+query.id));

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'post'])),
      },
    };
  },
);

const UpdatePostPage = () => {
  const { t } = useTranslation();
  const { push } = useRouter();
  const currentPost = useTypedSelector(currentPostSelector);

  useEffect(() => {
    !currentPost && push(Routes.NOT_FOUND);
  }, []);

  return (
    <Layout title={t('post:updatePost')}>
      <h1>{t('post:updatePost')}</h1>
      {currentPost && <PostForm update />}
    </Layout>
  );
};
export default UpdatePostPage;
