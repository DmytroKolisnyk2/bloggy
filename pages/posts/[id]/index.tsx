import { DetailedPost } from '@components/detailed-post';
import { Layout } from '@components/layout';
import { Routes } from '@enums';
import { useTypedSelector } from '@hooks';
import { wrapper } from '@store';
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

const IndexPage = () => {
  const post = useTypedSelector(currentPostSelector);
  const { push } = useRouter();

  useEffect(() => {
    !post && push(Routes.NOT_FOUND);
  }, []);

  return (
    <Layout title={post?.title}>
      <DetailedPost />
    </Layout>
  );
};
export default IndexPage;
