import { css } from '@emotion/react';
import type { ThemeType } from 'theme';

export const container = ({ breakpoints, spaces }: ThemeType) => css`
  margin: 0 auto;
  ${breakpoints.up('xs')} {
    max-width: 600px;
    padding: 0 ${spaces.sm};
  }
  ${breakpoints.up('md')} {
    max-width: 900px;
    padding: 0 ${spaces.md};
  }
  ${breakpoints.up('lg')} {
    max-width: 1200px;
    padding: 0 ${spaces.md};
  }
`;
