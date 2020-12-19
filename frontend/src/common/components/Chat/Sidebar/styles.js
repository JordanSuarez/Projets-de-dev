export default ({ breakpoints, palette }) => ({
  /* ---------- Sidebar---------- */
  chatSidebar: {
    height: '100vh',
    width: '100vw',
    zIndex: '20',
    position: 'fixed',
    top: '0',
    right: '0',
    backgroundColor: palette.lightBlue,
    padding: '80px 3px 3px 3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  messages: {

  },


});
