export default ({ breakpoints }) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    margin: '2rem auto 1rem auto',
    fontSize: 'larger',
    [breakpoints.down('sm')]: {
      margin: '2rem 1rem 1rem 1rem',
      textAlign: 'center',
    },
  },
  backToHome: {
    margin: '1rem auto',
    width: 'fit-content',
  },
  image: {
    margin: 'auto',
    transition: '.2s ease-in-out',
    [breakpoints.up('lg')]: {
      width: '45%',
    },
    [breakpoints.down('md')]: {
      width: '60%',
    },
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.down('xs')]: {
      marginTop: '4rem',
    },
    '&:hover': {
      transition: '.2s ease-in-out',
      transform: 'scale(1.1)',
      cursor: 'pointer',
    },
  },
});
