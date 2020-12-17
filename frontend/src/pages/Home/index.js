import { withStyles } from '@material-ui/core';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { getLatestProjects } from 'src/common/redux/actions/home';
import { getProfileLikes } from 'src/common/redux/actions/userProfile';

import Home from './Home';
import styles from './styles';

const mapStateToProps = (state) => ({
  loading: state.home.loading,
  projects: state.home.projects,
  isLogged: state.auth.isLogged,
  myLikes: state.userProfile.myLikes,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => {
    dispatch(getLatestProjects('?limit=12', '&offset=1'));
  },
  getMyLikes: () => {
    dispatch(getProfileLikes());
  },
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Home);
