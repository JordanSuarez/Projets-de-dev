export default ({ breakpoints, palette }) => ({
  containerUser: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100vh',
    width: '100vw',
    zIndex: '30',
    backgroundColor: '#313131',
    color: palette.lightBlue,
    padding: '80px 0 0 0 ',
    [breakpoints.up('md')]: {
      padding: '0 0 0 0 ',
      left: '0',
      top: '150px',
      width: '320px',
    },
    [breakpoints.up('lg')]: {
      right: '0',
      left: 'inherit',
      top: '140px',
      width: '266px',

    },
  },
  closeUser: {
    zIndex: '30',
    color: palette.blue,
    position: 'fixed',
    top: '90px',
    right: '0',
    padding: '1em',
    [breakpoints.up('md')]: {
      right: 'inherit',
      left: '0',
    },
    [breakpoints.up('lg')]: {
      right: '0',
      left: 'inherit',
    },
  },
  user: {
    textAlign: 'center',
    padding: '0 1em',
  },
  userTitle: {
    margin: '1em auto',
    fontSize: '1.3em',
  },
  userImage: {
    margin: '0 auto',
    width: '150px',
    height: '150px',
  },
  username: {
    margin: '1em auto',
    fontSize: '1.3em',
  },
  userBio: {
    wordBreak: 'break-word',
    margin: '1em auto',
  },
  userProfile:{
    backgroundColor: palette.blue,
    color: palette.lightBlue,
    textTransform: 'lowercase',
  },
});
