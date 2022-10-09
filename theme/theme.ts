import { Theme } from '@enums';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: Theme.DARK,
  },
});
const lightTheme = createTheme({
  palette: {
    mode: Theme.LIGHT,
  },
});

export const themes = {
  [Theme.DARK]: darkTheme,
  [Theme.LIGHT]: lightTheme,
};
export type ThemeType = typeof lightTheme;
