import { Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useTypedSelector } from '@hooks';
import { updatePost } from '@services';
import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { currentPostSelector, getPost } from 'store/current-post';

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

const UpdatePostPage = () => {
  const { t } = useTranslation();
  const post = useTypedSelector(currentPostSelector);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [loading, setLoading] = useState(false);
  const { query, push } = useRouter();

  return (
    <div>
      <h1>{t('common:main.greeting')}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length === 0 || body.length === 0) return;
          setLoading(true);
          updatePost(+query.id, { title, body })
            .then((data) => push(uniteRoutes(Routes.POSTS, data.id)))
            .finally(() => setLoading(false));
        }}
      >
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          type="text"
        />
        <textarea
          value={body}
          onChange={({ target }) => setBody(target.value)}
        ></textarea>
        {loading ? <p>Loading...</p> : <button type="submit">Publish</button>}
      </form>
    </div>
  );
};
export default UpdatePostPage;
