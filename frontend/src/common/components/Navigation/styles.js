import logo from 'src/common/assets/images/logo.png';

export default ({ palette, breakpoints }) => ({
  navigation: {
    minHeight: '5rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Orbitron',
    fontWeight: 400,
  },
  burger: {
    color: palette.darkBlue,
  },
  logoDesktop: {
    backgroundImage: `url(${logo})`,
    height: '5rem',
    width: '5rem',
    backgroundPositionY: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  logoMobile: {
    backgroundImage: `url(${logo})`,
    height: '5rem',
    width: '5rem',
    backgroundPositionY: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginLeft: 'calc(39% - 2rem)',
    '&:hover': {
      cursor: 'pointer',
    },
    [breakpoints.down(450)]: {
      marginLeft: 'calc(37% - 2rem)',
    },
    [breakpoints.down(400)]: {
      marginLeft: 'calc(35% - 2rem)',
    },
    [breakpoints.down(350)]: {
      marginLeft: 'calc(33% - 2rem)',
    },
    [breakpoints.down(300)]: {
      marginLeft: 'calc(31% - 2rem)',
    },
    [breakpoints.down(280)]: {
      marginLeft: 'calc(28% - 2rem)',
    },
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    width: 'inherit',
  },
  menuItem: {
    color: palette.darkBlue,
    marginTop: '0.5rem',
  },
  itemLink: {
    color: palette.darkBlue,
    margin: '1rem',
    width: 'fit-content',
    whiteSpace: 'nowrap',
    '&:hover': {
      color: palette.blue,
    },
  },
  itemLinkActive: {
    color: palette.blue,
    fontWeight: 'bold',
  },
  button: {
    textTransform: 'initial',
    backgroundColor: palette.darkBlue,
    color: palette.white,
    '&:hover': {
      backgroundColor: palette.darkBlue,
      color: palette.blue,
    },
  },
});
