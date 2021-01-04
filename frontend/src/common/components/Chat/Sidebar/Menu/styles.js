export default ({ breakpoints, palette }) => ({
  menuContainer: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: 'auto',
    zIndex: '30',
    backgroundColor: '#313131',
    padding: '80px 0 0 0 ',
    [breakpoints.up('md')]: {
      width: '320px',
      padding: '130px 0 0 0 ',
    },

  },
  showMenu: {
    zIndex: '30',
    position: 'fixed',
    right: '0',
    padding: '1em',
    color: palette.blue,
    [breakpoints.up('md')]: {
      display: 'none',
      position: 'relative',
    },

  },

  menu: {
    width: '100vw',
    padding: '4em 0em 1em 0em',
    [breakpoints.up('md')]: {
      padding: '0em 0em 1em 0em',
      width: '320px',
      display: 'flex',
      justifyContent: 'center',
    },
    [breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
    },
  },

  menuItem: {
    display: 'flex',
    padding: '1em',
    justifyContent: 'space-between',
    alignItems: ' center',

    [breakpoints.up('md')]: {
      padding: '1em',
    },
    [breakpoints.up('lg')]: {
      justifyContent: 'flex-start',
    },
  },
  menuItemHidden: {
    display: 'none',
  },

  menuItemContent: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: ' center',
    padding: '1em',
    color: palette.blue,
    [breakpoints.up('md')]: {

    },
  },

  menuItemContentSelected: {
    cursor: 'pointer',
    backgroundColor: palette.blue,
    padding: '1em',
    borderRadius: '6px',
    color: palette.darkBlue,
    textAlign: 'center',
    [breakpoints.up('md')]: {

    },
  },

  menuItemIcon: {
    marginRight: '1em',
    [breakpoints.up('md')]: {
      marginRight: '0.5em',
      marginLeft: '0.5em',
    },

  },

  menuItemTitle: {
    [breakpoints.up('md')]: {
      display: 'none',
    },
    [breakpoints.up('lg')]: {
      display: 'block',
    },
  },

  menuItemArrow: {
    color: palette.blue,
    [breakpoints.up('md')]: {
      display: 'none',
    },
  },
  

});
