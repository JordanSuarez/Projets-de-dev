import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { setChat } from 'src/common/redux/actions/chat';
import { } from 'src/common/redux/actions/profiles';
import Menu from './Menu';
import styles from './styles';

const mapStateToProps = (state) => ({
  profiles: state.profiles.profiles,
  loading: state.profiles.loading,
  status: state.chat.status,
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
)(Menu);
