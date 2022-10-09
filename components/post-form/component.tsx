import { Routes } from '@enums';
import { uniteRoutes } from '@helpers';
import { TextField } from '@mui/material';
import { createPost } from '@services';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';

import { postSchema } from 'validation-schemas';
import type { PostDto } from '@types';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useTypedSelector } from '@hooks';
import { currentPostSelector } from 'store/current-post';
import * as styles from './styles';

export function PostForm({ update = false }: { update?: boolean }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const currentPost = useTypedSelector(currentPostSelector);
  const { push } = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
  } = useForm<PostDto>({
    resolver: joiResolver(postSchema(t)),
  });

  useEffect(() => {
    if (!update) return;
    setValue('body', currentPost.body);
    setValue('title', currentPost.title);
  }, []);

  const onSubmit: SubmitHandler<PostDto> = (data) => {
    const { title, body } = data;
    setLoading(true);
    createPost({ title, body })
      .then((data) => push(uniteRoutes(Routes.POSTS, data.id)))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div css={styles.inputWrapper}>
        <TextField
          label={t('post:labels.title')}
          placeholder={t('post:placeholders.title')}
          size="small"
          fullWidth
          variant="outlined"
          error={!!errors.title?.message}
          helperText={errors.title?.message}
          {...register('title')}
        />
      </div>
      <div css={styles.inputWrapper}>
        <TextField
          error={!!errors.body?.message}
          helperText={errors.body?.message}
          size="small"
          fullWidth
          variant="outlined"
          label={t('post:labels.body')}
          placeholder={t('post:placeholders.body')}
          minRows={5}
          multiline
          {...register('body')}
        />
      </div>
      <LoadingButton loading={loading} variant="contained" type="submit">
        {update ? t('post:save') : t('post:publishPost')}
      </LoadingButton>
    </form>
  );
}
