export default ({ breakpoints, palette }) => ({
  /* ---------- Button open---------- */
  chatContainerButton: {
    zIndex: '100',
    position: 'fixed',
    bottom: '1.4rem',
    right: '10px',
    color: 'red',
    overflowX: 'none',
  },
  chatButton: {
    backgroundColor: palette.blue,
    '&:hover': {
      backgroundColor: palette.blue,
    },
  },
  chatIcon: {
    color: palette.darkBlue,
  },

  /* ---------- Button close---------- */
  closeChatButton: {
    zIndex: '100',
    position: 'fixed',
    top: '87px',
    left: '7px',
  },
  closedIcon: {
    color: palette.blue,
  },
});
