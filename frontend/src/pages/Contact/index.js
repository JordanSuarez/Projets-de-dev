import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { submitContact } from 'src/common/redux/actions/contact';
import Contact from './Contact';
import styles from './styles';

const mapDispatchToProps = (dispatch) => ({
  submitContact: (values) => {
    dispatch(submitContact(values));
  },
});

export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps,
  ),
)(Contact);
