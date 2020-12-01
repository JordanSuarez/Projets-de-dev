import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { classes as classesProps } from 'src/common/classes';

import CardProject from 'src/common/components/CardProject';
import './home.scss';

// eslint-disable-next-line arrow-body-style
const Home = ({ classes }) => {
  return (
    <main className={classes.home}>
      <h2 className={classes.subtitle}> Derniers projets publiés</h2>
      <div className={classes.latestProject}>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
      <Pagination className={classes.pagination} count={10} size="small" />
    </main>
  );
};

Home.propTypes = {
  ...classesProps,
};

export default Home;
