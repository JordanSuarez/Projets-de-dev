import React from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Navigation from 'src/common/components/Navigation';
import Loader from 'src/common/components/Loader';
import Footer from 'src/common/components/Footer';
import Chat from 'src/common/components/Chat';

const Base = ({
  classes, children, loading,
}) => (
  <div className={classes.container}>
    <Navigation />
    <main className={classes.main}>
      {loading && <Loader />}
      {!loading && (
        children
      )}
      <Chat className={classes.chat} />
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
