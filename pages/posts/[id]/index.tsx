import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getPost } from 'store/current-post/actions';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { locale, query } = ctx;
    await store.dispatch(getPost(+query.id));

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
