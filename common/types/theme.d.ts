import type { colors, fontSizes, fontWeights, spaces } from 'theme';

declare module '@mui/material/styles' {
  interface Theme {
    colors: typeof colors;
    spaces: typeof spaces;
    fontWeights: typeof fontWeights;
    fontSizes: typeof fontSizes;
  }
  interface ThemeOptions {
    colors: typeof colors;
    spaces: typeof spaces;
    fontWeights: typeof fontWeights;
    fontSizes: typeof fontSizes;
  }
}
