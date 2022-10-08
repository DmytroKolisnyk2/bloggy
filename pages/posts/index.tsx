import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts } from 'store/posts/actions';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale } = ctx;

    await store.dispatch(getAllPosts());

    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  },
);

const IndexPage = () => {
  const { t } = useTranslation();

  return <h1>{t('common:main.greeting')}</h1>;
};
export default IndexPage;
