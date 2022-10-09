import { useTypedSelector } from '@hooks';
import { useTranslation } from 'next-i18next';
import { postsSelector } from 'store/posts';
import { Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import Link from 'next/link';
import CommentIcon from '@mui/icons-material/Comment';

import * as styles from './styles';

export function Posts() {
  const { t } = useTranslation();
  const posts = useTypedSelector(postsSelector);

  return (
    <>
      <h1>{t('post:posts.headline')}</h1>
      {posts?.length > 0 ? (
        posts.map((item) => (
          <div css={styles.articleWrapper} key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div css={styles.controlsWrapper}>
              <div css={styles.commentWrapper}>
                <span>{item.comments.length}</span>
                <CommentIcon fontSize="inherit" />
              </div>
              <Link href={uniteRoutes(Routes.POSTS, item.id)}>
                <a css={styles.link}> {t('post:posts.goToPost')}</a>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>{t('post:posts.noPost')}</p>
      )}
    </>
  );
}
