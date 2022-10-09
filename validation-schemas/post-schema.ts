import { PostLengthValidation } from '@constants';
import Joi from 'joi';
import type { TFunction } from 'next-i18next';

export const postSchema = (t: TFunction) =>
  Joi.object({
    title: Joi.string()
      .min(PostLengthValidation.TITLE_MIN)
      .max(PostLengthValidation.TITLE_MAX)
      .required()
      .messages({
        'string.max': t('post:validation.title.long'),
        'string.min': t('post:validation.title.small'),
        'string.empty': t('post:validation.title.small'),
      }),
    body: Joi.string()
      .required()
      .min(PostLengthValidation.BODY_MIN)
      .max(PostLengthValidation.BODY_MAX)
      .messages({
        'string.max': t('post:validation.body.long'),
        'string.min': t('post:validation.body.small'),
        'string.empty': t('post:validation.body.small'),
      }),
  });
