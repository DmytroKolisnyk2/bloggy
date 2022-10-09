import { PostForm } from '@components/post-form';
import { DeletePostBtn } from '@components/primitives/delete-button';
import { useTranslation } from 'next-i18next';
import * as styles from './styles';

export function UpdatePost() {
  const { t } = useTranslation();

  return (
    <>
      <div css={styles.headlineWrapper}>
        <h1>{t('post:updatePost')}</h1>
        <DeletePostBtn />
      </div>

      <PostForm update />
    </>
  );
}
