import { Layout } from '@components/layout';
import { Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { createPost } from '@services';
import type { NextPageContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const getStaticProps = async (ctx: NextPageContext) => {
  const { locale } = ctx;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

const CreatePostPage = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  return (
    <Layout title="Create post">
      <h1>{t('common:main.greeting')}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (title.length === 0 || body.length === 0) return;
          setLoading(true);
          createPost({ title, body })
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
    </Layout>
  );
};
export default CreatePostPage;
