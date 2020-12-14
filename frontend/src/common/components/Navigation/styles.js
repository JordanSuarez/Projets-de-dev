import logo from 'src/common/assets/images/logo.png';

export default ({ palette }) => ({
  navigation: {
    minHeight: '5rem',
    display: 'flex',
    justifyContent: 'center',
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
    backgroundColor: palette.darkBlue,
    color: palette.white,
    '&:hover': {
      backgroundColor: palette.darkBlue,
      color: palette.blue,
    },
  },
});
