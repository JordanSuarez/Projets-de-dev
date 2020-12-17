import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { getProfilesInfos } from 'src/common/redux/actions/profiles';
import Users from './Users';
import styles from './styles';

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,

});

const mapsDispatchToProps = (dispatch) => ({
  getProfiles: () => {
    console.log('mapdispatchtopprops getUsers');
    dispatch(getProfilesInfos());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Users);
