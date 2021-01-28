import { createMuiTheme } from '@material-ui/core';

const palette = {
  white: '#ffffff',
  yellow: '#E2CB57',
  darkBlue: '#424244',
  blue: '#59B0DF',
  lightBlue: '#F4F6FF',
  green: '#76C151',
  errorField: '#ec524b',
};

const font = {
  main: 'Yanone Kaffeesatz',
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 500,
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
