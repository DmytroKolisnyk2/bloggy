import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const articleWrapper = ({ spaces, colors }: ThemeType) => css`
  padding: ${spaces.xs} ${spaces.md} ${spaces.lg};
  margin-bottom: ${spaces.md};
  background-color: ${colors.body};
  border-radius: 10px;
`;

export const link = ({ spaces, colors }: ThemeType) => css`
  margin-right: ${spaces.sm};
  text-decoration: none;
  cursor: pointer;
`;
