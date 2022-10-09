import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const postText = ({ fontSizes, spaces }: ThemeType) => css`
  font-size: ${fontSizes.h5};
  margin-bottom: ${spaces.xl};
`;
export const headlineWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
