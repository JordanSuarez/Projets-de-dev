import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addComment } from 'src/common/redux/actions/comments';
import Comments from './Comments';
import styles from './styles';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  userId: state.auth.userId,
});

const mapsDispatchToProps = (dispatch) => ({
  handleComment: (values) => {
    console.log(values);
    dispatch(addComment(values));
  },
  handleCommentUpdate: (values) => {
    console.log(values);
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Comments);
