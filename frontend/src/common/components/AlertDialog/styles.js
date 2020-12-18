export default ({ palette }) => ({
  agreeButton: {
    textTransform: 'initial',
    '&:hover': {
      color: palette.white,
      backgroundColor: palette.errorField,
    },
  },
  disagreeButton: {
    textTransform: 'initial',
    color: palette.white,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },
});
