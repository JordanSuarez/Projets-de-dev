export default ({ palette }) => ({
  agreeButton: {
    '&:hover': {
      color: palette.white,
      backgroundColor: palette.errorField,
    },
  },
  disagreeButton: {
    color: palette.white,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      color: palette.blue,
      backgroundColor: palette.darkBlue,
    },
  },
});
