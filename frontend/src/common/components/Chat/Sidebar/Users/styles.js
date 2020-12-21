export default ({ breakpoints, palette }) => ({

  users: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: 'auto',
    width: '100vw',
    zIndex: '30',
    backgroundColor: '#313131',
    color: palette.blue,
    padding: '150px 0 0 30px ',
    [breakpoints.up('md')]: {
      color: palette.lightBlue,
      padding: '0 0 0 0 ',
      position: 'fixed',
      left: '0',
      top: '200px',
      maxWidth: '320px',
    },
    [breakpoints.up('lg')]: {
      padding: '69px 0 0 0',
      position: 'static',
      maxWidth: '280px',
    },
  },
  closedList: {
    zIndex: '30',
    color: palette.blue,
    position: 'fixed',
    top: '90px',
    right: '0',
    padding: '1em',
    [breakpoints.up('md')]: {
      display: 'none',
      position: 'relative',
    },
  },

  listTitle: {
    padding: '2em 0 0 0',
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: palette.lightBlue,
    [breakpoints.up('md')]: {
      padding: '1em 0 1em 0',
      backgroundColor: palette.blue,
      justifyContent: 'center',
    },
  },

  menuItemIcon: {
    marginRight: '1em',
  },

  menuItemIconSelected: {
    marginRight: '1em',
    padding: '5em',
    backgroundColor: palette.lightBlue,

  },

  containerUsers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 'calc(100vh - 80px)',
    overflowY: 'scroll',
    overflowX: 'hidden',
    margin: '1em auto',
    padding: '1em 0 0 0 ',

    [breakpoints.up('md')]: {
      padding: '1em 0 0 1em ',
    },
  },

  user: {
    color: palette.lightBlue,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px',
    wordBreak: ' break-word',
  },

  listUserImage: {
    margin: '0 auto',
  },

  listUsername: {
    padding: '0 0 0 1em',
  },

});
