import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { classes as classesProps } from 'src/common/classes';

import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import './home.scss';

// eslint-disable-next-line arrow-body-style
const Home = ({ classes }) => {
  return (
    <Base>
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
    </Base>
  );
};

Home.propTypes = {
  ...classesProps,
};

export default Home;
