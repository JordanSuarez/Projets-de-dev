import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { classes as classesProps } from 'src/common/classes';

import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';

// eslint-disable-next-line arrow-body-style
const Home = ({ classes }) => {
  return (
    <Base>
      <div className={classes.home}>
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
      </div>
    </Base>
  );
};

Home.propTypes = {
  ...classesProps,
};

export default Home;
