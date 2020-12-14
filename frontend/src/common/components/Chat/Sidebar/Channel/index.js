import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { setChannel } from 'src/common/redux/actions/chat';

import Channel from './Channel';
import styles from './styles';

const mapStateToProps = (state) => ({
});

const mapsDispatchToProps = (dispatch) => ({
  setChoiceChannel: (id) => {
    dispatch(setChannel(id));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Channel);
