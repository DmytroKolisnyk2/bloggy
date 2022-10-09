import { useTypedSelector } from '@hooks';
import { ThemeProvider as ThemeProviderMui } from '@mui/material';
import type { ReactNode } from 'react';
import { themeSelector } from 'store/theme';
import { themes } from 'theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useTypedSelector(themeSelector);

  return <ThemeProviderMui theme={themes[theme]}>{children}</ThemeProviderMui>;
};

export { ThemeProvider };
