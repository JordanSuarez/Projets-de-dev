import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getProfileInfo } from 'src/common/redux/actions/profileEdit';

import ProfileEdition from './ProfileEdition';
import styles from './styles';

const mapStateToProps = (state) => ({
  redirect: state.auth.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => {
    console.log('je suis dans mapdispatch');
    dispatch(getProfileInfo());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ProfileEdition);
