import { PostRoutes, Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { deletePost } from '@services';
// import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  commentsLoadingSelector,
  currentPostSelector,
} from 'store/current-post';
import { addComment } from 'store/current-post/actions';

export function DetailedPost() {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const post = useTypedSelector(currentPostSelector);
  const commentsLoading = useTypedSelector(commentsLoadingSelector);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState('');
  const { query, push } = useRouter();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
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
}
