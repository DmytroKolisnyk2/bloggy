import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const commentWrapper = ({ spaces, colors }: ThemeType) => css`
  border-left: 3px solid ${colors.brown};
  margin-left: ${spaces.xs};
  padding-left: ${spaces.sm};
`;
