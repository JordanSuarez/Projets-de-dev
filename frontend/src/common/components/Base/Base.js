import React from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Navigation from 'src/common/components/Navigation';
import Loader from 'src/common/components/Loader';
import Footer from 'src/common/components/Footer';
import Snackbar from 'src/common/components/Snackbar';

const Base = ({
  classes, children, loading,
}) => (
  <div className={classes.container}>
    <Navigation />
    <main className={classes.main}>
      <Snackbar />
      {loading && <Loader />}
      {!loading && (
        children
      )}
    </main>
    <Footer className={classes.footer} />
  </div>
);

Base.propTypes = {
  ...classesProps,
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Base.defaultProps = {
  loading: false,
};

export default Base;
