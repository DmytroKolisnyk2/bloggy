import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const inputWrapper = ({ spaces }: ThemeType) => css`
  margin-bottom: ${spaces.md};
`;
