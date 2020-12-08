import { createMuiTheme } from '@material-ui/core';

const palette = {
  white: '#ffffff',
  yellow: '#F3C623',
  darkBlue: '#10375C',
  blue: '#127681',
  lightBlue: '#F4F6FF',
  errorField: '#ec524b',
};

const font = {
  main: 'Roboto',
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints,
  palette,
  font,
});
