import React from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Navigation from 'src/common/components/Navigation';
import Footer from 'src/common/components/Footer';

// eslint-disable-next-line arrow-body-style
const Base = ({ classes, children }) => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Base.propTypes = {
  ...classesProps,
  children: PropTypes.node.isRequired,
};

export default Base;
