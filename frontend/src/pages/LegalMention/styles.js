export default ({ palette }) => ({
  legalMentionContainer: {
    margin: '2rem',
    '& h3': {
      margin: '1rem 0',
      textDecoration: 'underline',
      color: palette.darkBlue,
    },
    '& div': {
      color: palette.darkBlue,
      lineHeight: 'normal',
    },
  },
  image: {
    height: '400px',
    width: '100%',
    objectFit: 'cover',
  },
});
