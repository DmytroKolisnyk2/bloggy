import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const form = ({ spaces }: ThemeType) => css`
  padding-bottom: ${spaces.xl};
`;
