export default ({ breakpoints, palette }) => ({
  /* ---------- Sidebar---------- */
  chatSidebar: {
    height: '100vh',
    width: '100vw',
    zIndex: '50',
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: palette.blue,
    padding: '80px 10px 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  messages: {
    flex:1,
    padding: '0.5em',
    [breakpoints.up('md')]: {
      order: 1,
      padding: '30px 1em 1em 1em',
    },
  },

  channel: {
    padding: '30px 0.5em 0.5em 0.5em',
    [breakpoints.up('md')]: {
      order: 2,
    },
  },

});
