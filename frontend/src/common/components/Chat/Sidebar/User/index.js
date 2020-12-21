import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setChat } from 'src/common/redux/actions/chat';

import User from './User';
import styles from './styles';

const mapStateToProps = (state) => ({
  loading: state.profiles.loading,
  status: state.chat.status,
  profileSelected: state.chat.profileSelected,
});

const mapsDispatchToProps = (dispatch) => ({
  setStatus: (status) => {
    dispatch(setChat(status));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(User);
