import { createMuiTheme } from '@material-ui/core';

const palette = {
  white: '#ffffff',
  yellow: '#F3C623',
  darkBlue: '#10375C',
  blue: '#127681',
  lightBlue: '#F4F6FF',
};

const font = {
  main: 'Roboto',
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette,
  font,
});
