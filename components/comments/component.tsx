import { useTypedSelector } from '@hooks';
import { useTranslation } from 'next-i18next';
import { currentPostSelector } from 'store/current-post';
import * as styles from './styles';

export function Comments() {
  const { t } = useTranslation();
  const { comments } = useTypedSelector(currentPostSelector);

  return (
    <>
      <h2>{t('post:comment.comments')}</h2>

      {comments?.length > 0 ? (
        comments?.map((item) => (
          <div css={styles.commentWrapper} key={item.id}>
            <p>{item.body}</p>
          </div>
        ))
      ) : (
        <p>{t('post:comment.noComments')}</p>
      )}
    </>
  );
}
