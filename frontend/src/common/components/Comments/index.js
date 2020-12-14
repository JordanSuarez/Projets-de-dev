import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addComment, editComment, deleteComment } from 'src/common/redux/actions/comments';
import Comments from './Comments';
import styles from './styles';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  userId: state.auth.userId,
  redirect: state.redirection.redirect,
});

const mapsDispatchToProps = (dispatch) => ({
  handleComment: (values) => {
    dispatch(addComment(values));
  },
  handleCommentUpdate: (values, id) => {
    dispatch(editComment(values, id));
  },
  handleCommentDelete: (values, id) => {
    dispatch(deleteComment(values, id));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Comments);
