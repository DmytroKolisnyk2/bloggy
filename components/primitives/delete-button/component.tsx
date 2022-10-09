import { useTranslation } from 'next-i18next';
import { Button } from '@mui/material';
import { deletePost } from '@services';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { Routes } from '@enums';

export function DeletePostBtn() {
  const { t } = useTranslation();
  const { query, push } = useRouter();

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={() => deletePost(+query.id).then(() => push(Routes.POSTS))}
    >
      {t('post:deletePost')}
    </Button>
  );
}
