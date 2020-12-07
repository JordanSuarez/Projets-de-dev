/* eslint-disable import/no-unresolved */
import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProfilesInfos } from 'src/common/redux/actions/profiles';

import Profiles from './Profiles';
// eslint-disable-next-line import/extensions
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    dispatch(getProfilesInfos());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profiles);
