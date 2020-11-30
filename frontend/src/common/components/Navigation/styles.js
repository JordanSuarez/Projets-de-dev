import logo from 'src/common/assets/images/logo.png';

export default ({ palette }) => ({
  navigation: {

  },
  burger: {
    color: palette.darkBlue,
  },
  logo: {
    backgroundImage: `url(${logo})`,
    height: '6rem',
    width: '6rem',
    backgroundSize: '100%',
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
  },
  itemLinkActive: {
    color: palette.yellow,
  },
  button: {
    backgroundColor: palette.darkBlue,
    color: palette.yellow,
  },
});
