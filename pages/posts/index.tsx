import { Layout } from '@components/layout';
import { Posts } from '@components/posts';
import { wrapper } from '@store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts } from 'store/posts/actions';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;

    await store.dispatch(getAllPosts());

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common', 'post'])),
      },
    };
  },
);

const IndexPage = () => (
  <Layout title="Posts">
    <Posts />
  </Layout>
);
export default IndexPage;
