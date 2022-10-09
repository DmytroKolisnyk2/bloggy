import { addComment } from 'store/current-post/actions';
import { Button, TextField } from '@mui/material';
import { useAppDispatch, useTypedSelector } from '@hooks';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { commentsLoadingSelector } from 'store/current-post';
import * as styles from './styles';

export function CommentForm() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const commentsLoading = useTypedSelector(commentsLoadingSelector);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState('');
  const { query } = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment.length === 0) return;
    dispatch(addComment({ postId: +query.id, body: comment }));
  };

  return (
    <form css={styles.form} onSubmit={submitHandler}>
      {openComment && (
        <>
          <TextField
            placeholder={t('post:comment.placeholder')}
            size="small"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
          <LoadingButton
            variant="contained"
            loading={commentsLoading}
            type="submit"
          >
            {t('post:comment.publishComment')}
          </LoadingButton>
        </>
      )}
      <Button variant="contained" onClick={() => setOpenComment(!openComment)}>
        {openComment
          ? t('post:comment.cancelComment')
          : t('post:comment.addComment')}
      </Button>
    </form>
  );
}
