export default ({ palette }) => ({
  agreeButton: {
    '&:hover': {
      backgroundColor: palette.errorField,
    },
  },
  disagreeButton: {
    color: palette.yellow,
    backgroundColor: palette.darkBlue,
    '&:hover': {
      backgroundColor: palette.blue,
    },
  },
});
