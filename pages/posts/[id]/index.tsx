import { PostRoutes, Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { deletePost } from '@services';
import { wrapper } from '@store';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  commentsLoadingSelector,
  currentPostSelector,
} from 'store/current-post';
import { addComment, getPost } from 'store/current-post/actions';

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
  const dispatch = useAppDispatch();
  const post = useTypedSelector(currentPostSelector);
  const commentsLoading = useTypedSelector(commentsLoadingSelector);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState('');
  const { query, push } = useRouter();
  return (
    <div>
      <h1>{t('common:main.greeting')}</h1>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <div>
        {post.comments?.map((item) => (
          <div key={item.id}>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {commentsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={() => setOpenComment(!openComment)}>
            {openComment ? 'cancel' : 'add comment'}
          </button>
          {openComment && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (comment.length === 0) return;
                dispatch(addComment({ postId: +query.id, body: comment }));
              }}
            >
              <input
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
              <button type="submit">Publish</button>
            </form>
          )}
        </>
      )}
      <Link
        href={uniteRoutes(Routes.POSTS, PostRoutes.UPDATE, query.id as string)}
      >
        Update
      </Link>
      <button
        onClick={() => deletePost(+query.id).then(() => push(Routes.POSTS))}
      >
        Delete post
      </button>
    </div>
  );
};
export default IndexPage;
