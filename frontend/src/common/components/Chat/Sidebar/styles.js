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
    padding: '80px 3px 3px 3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  messages: {

    [breakpoints.up('md')]: {
      padding: '30px 1em 1em 1em',
    },
  },

  channel: {
    padding: '30px 0.5em 0.5em 0.5em',
    [breakpoints.up('md')]: {
    },
  },

});
