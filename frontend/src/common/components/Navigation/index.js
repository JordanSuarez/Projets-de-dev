import { withStyles } from '@material-ui/core';

import Navigation from './Navigation';
import styles from './styles';
// const mapStateToProps = (state) => ({
// //   title: state.home.title,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleClick: () => {
//     // dispatch(fetchData());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default withStyles(styles)(Navigation);
