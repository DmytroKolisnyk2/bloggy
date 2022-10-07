import { ColorPalette } from "@enums";

const colors = {
  body: ColorPalette.BODY,
  text: ColorPalette.DARK,
};

const darkColors = {
  body: ColorPalette.BODY,
  text: ColorPalette.DARK,
};

const fontSizes = {
  h1: "64px",
  h3: "36px",
  h4: "22px",
  h5: "18px",
  h6: "16px",
  body1: "16px",
  body2: "14px",
  body3: "12px",
  label: "14px",
  tub: "18px",
  toggle: "14px",
  button: "16px",
  buttonSmall: "12px",
  caption: "12px",
  smallButton: "15px",
  tooltip: "15px",
  cell: "18px",
};

const fontWeights = {
  h1: "800",
  h3: "800",
  h4: "800",
  h5: "600",
  h6: "700",
  body1: "400",
  body2: "400",
  label: "400",
};

const lineHeights = {
  h1: "74px",
  h3: "41px",
  h4: "25px",
  h5: "21px",
  h6: "22px",
  body1: "22px",
  body2: "16px",
  label: "16px",
};

const spaces = {
  xs: "5px",
  sm: "10px",
  md: "15px",
  lg: "20px",
  xl: "25px",
  xl1: "30px",
  xl2: "35px",
  xl3: "40px",
  xl4: "45px",
  xl5: "50px",
  xl6: "55px",
  xl7: "60px",
  xl8: "65px",
  xl9: "70px",
  xl10: "75px",
  xl11: "80px",
};

const radiuses = {
  xxs: "2px",
  xs: "5px",
  sm: "7px",
  md: "10px",
  lg: "50px",
  circle: "50%",
  cardTub: "15px",
};

const shadows = {};

const borders = {};

const zIndex = {};

const opacities = {};

const iconSizes = {
  lg: "42px",
  md: "18px",
  sm: "16px",
  xs: "14px",
};

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const mq = Object.keys(breakpoints).map(
  (bp) => `@media (max-width: ${breakpoints[bp]}px)`
);

const lightTheme = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
  radiuses,
  shadows,
  iconSizes,
  borders,
  opacities,
  breakpoints,
  mq,
  zIndex,
};

const darkTheme = {
  colors: darkColors,
  fontSizes,
  fontWeights,
  lineHeights,
  spaces,
  radiuses,
  shadows,
  iconSizes,
  borders,
  opacities,
  breakpoints,
  mq,
  zIndex,
};

export { lightTheme, darkTheme };
