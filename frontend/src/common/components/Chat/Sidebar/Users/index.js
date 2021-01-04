import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setChat, saveUserSelected } from 'src/common/redux/actions/chat';
import { getProfilesInfos } from 'src/common/redux/actions/profiles';
import Users from './Users';
import styles from './styles';

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,
  status: state.chat.status,
});

const mapsDispatchToProps = (dispatch) => ({
  getProfiles: () => {
    dispatch(getProfilesInfos());
  },
  setStatus: (status) => {
    dispatch(setChat(status));
  },
  setUserSelected: (status) => {
    dispatch(saveUserSelected(status));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Users);
