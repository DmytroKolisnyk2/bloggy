import { ColorPalette, Theme } from '@enums';
import { createTheme } from '@mui/material';
import { brown } from '@mui/material/colors';

export const spaces = {
  xs: '5px',
  sm: '10px',
  md: '15px',
  lg: '20px',
  xl: '25px',
  xl1: '30px',
  xl2: '35px',
  xl3: '40px',
  xl4: '45px',
  xl5: '50px',
  xl6: '55px',
  xl7: '60px',
  xl8: '65px',
  xl9: '70px',
  xl10: '75px',
  xl11: '80px',
};

export const fontSizes = {
  h1: '64px',
  h3: '36px',
  h4: '22px',
  h5: '18px',
  h6: '16px',
  body1: '16px',
  body2: '14px',
  body3: '12px',
  label: '14px',
};

export const fontWeights = {
  h1: '800',
  h3: '800',
  h4: '800',
  h5: '600',
  h6: '700',
  body1: '400',
  body2: '400',
};

export const colors = {
  body: ColorPalette.BODY,
  text: ColorPalette.DARK,
  white: ColorPalette.WHITE,
  teal: ColorPalette.TEAL,
  brown: ColorPalette.BROWN,
};

const darkColors = {
  body: ColorPalette.DARK,
  text: ColorPalette.BODY,
  white: ColorPalette.WHITE,
  teal: ColorPalette.TEAL,
  brown: ColorPalette.BROWN,
};

const darkTheme = createTheme({
  palette: {
    mode: Theme.DARK,
    primary: { main: brown['A400'] },
  },
  colors: darkColors,
  spaces,
  fontSizes,
  fontWeights,
});
const lightTheme = createTheme({
  palette: {
    mode: Theme.LIGHT,
    primary: { main: brown['A400'] },
  },
  colors,
  spaces,
  fontSizes,
  fontWeights,
});

export const themes = {
  [Theme.DARK]: darkTheme,
  [Theme.LIGHT]: lightTheme,
};
export type ThemeType = typeof lightTheme;
