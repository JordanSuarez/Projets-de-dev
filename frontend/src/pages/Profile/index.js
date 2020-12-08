import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProfileInfos } from 'src/common/redux/actions/profile';

import Profile from './Profile';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
  profile: state.profile.profile,
  loading: state.profile.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: (id) => {
    dispatch(getProfileInfos(id));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profile);
