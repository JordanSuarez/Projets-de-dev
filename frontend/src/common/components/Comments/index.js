import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { addComment } from 'src/common/redux/actions/comments';
import Comments from './Comments';
import styles from './styles';


const mapStateToProps = (state) => ({

});

const mapsDispatchToProps = (dispatch) => ({
  handleComment: (values) => {
    console.log(values);
    dispatch(addComment(values));
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapsDispatchToProps,
  ),
)(Comments);
