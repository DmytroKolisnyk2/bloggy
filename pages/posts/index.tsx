import { Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useTypedSelector } from '@hooks';
import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { postsSelector } from 'store/posts';
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
  const posts = useTypedSelector(postsSelector);
  return (
    <div>
      <h1>{t('common:main.greeting')}</h1>
      {posts.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
          <div>
            <span>{item.comments.length}</span>
            <Link href={uniteRoutes(Routes.POSTS, item.id)}>to article</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default IndexPage;
