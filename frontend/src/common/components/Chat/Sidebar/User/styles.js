export default ({ breakpoints, palette }) => ({/* --------------  Show individual profile --------------- */

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
      width: '266px',

    },
  },

  closeUser: {
    color: palette.blue,
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
