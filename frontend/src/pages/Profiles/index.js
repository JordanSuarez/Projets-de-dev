import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProfilesInfos } from 'src/common/redux/actions/profiles';
import { clearProjectsState } from 'src/common/redux/actions/projects';
import { clearHomeState } from 'src/common/redux/actions/home';

import Profiles from './Profiles';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.redirection.redirect,
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getProfiles: () => {
    dispatch(getProfilesInfos());
  },
  clearState: () => {
    dispatch(clearHomeState());
    dispatch(clearProjectsState());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Profiles);
