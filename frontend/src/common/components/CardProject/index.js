import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addLike, addDislike } from 'src/common/redux/actions/projects';
import Card from './Card';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  loading: state.profiles.loading,
});

const mapsDispatchToProps = (dispatch) => ({
  setLike: (projectId) => {
    dispatch(addLike(projectId));
  },
  setDislike: (projectId) => {
    dispatch(addDislike(projectId));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Card);
