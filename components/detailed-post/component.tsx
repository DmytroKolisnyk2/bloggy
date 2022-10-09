import { CommentForm } from '@components/comment-from';
import { Comments } from '@components/comments';
import { PostRoutes, Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { useTypedSelector } from '@hooks';
import { Button } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { currentPostSelector } from 'store/current-post';
import * as styles from './styles';

export function DetailedPost() {
  const post = useTypedSelector(currentPostSelector);
  const { t } = useTranslation();
  const { query, push } = useRouter();

  const goToUpdate = () =>
    push(uniteRoutes(Routes.POSTS, PostRoutes.UPDATE, query.id as string));

  return (
    <div>
      <div css={styles.headlineWrapper}>
        <h1>{post.title}</h1>
        <Button variant="contained" onClick={goToUpdate}>
          {t('post:updatePost')}
        </Button>
      </div>
      <p css={styles.postText}>{post.body}</p>
      <Comments />
      <CommentForm />
    </div>
  );
}
