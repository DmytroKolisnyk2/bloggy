import type { Interpolation } from '@emotion/react';
import type { ThemeType } from 'theme';

export interface NavLinkProps {
  href: string;
  activeCss: Interpolation<ThemeType>;
  children: string;
  exact?: boolean;
  classes: Interpolation<ThemeType>[];
}
