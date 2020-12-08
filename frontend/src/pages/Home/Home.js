import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { classes as classesProps } from 'src/common/classes';

import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';

import { bool } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProjectRoute } from 'src/common/routing/routesResolver';
import headerImage from './header-image.png';

// eslint-disable-next-line arrow-body-style
const Home = ({ classes, loading }) => {
  const history = useHistory();

  const handleDisplayProject = (id) => {
    history.push(getProjectRoute(id));
  };
  return (
    <Base loading={loading}>
      <img className={classes.image} src={headerImage} alt="header" />
      <div className={classes.home}>
        <h2 className={classes.subtitle}> Derniers projets publiés</h2>
        <div className={classes.latestProject}>
          {/* TODO Get and give cardId to handleDisplayProject */}
          <p>0_o Modifications en cours o_0 </p>
        </div>
        <Pagination className={classes.pagination} count={10} size="small" />
      </div>
    </Base>
  );
};

Home.propTypes = {
  ...classesProps,
  loading: bool.isRequired,
};

export default Home;
