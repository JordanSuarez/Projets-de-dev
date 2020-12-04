import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { classes as classesProps } from 'src/common/classes';

import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';

import { useHistory } from 'react-router-dom';
import { getProjectRoute } from 'src/common/routing/routesResolver';
import headerImage from './header-image.png';

// eslint-disable-next-line arrow-body-style
const Home = ({ classes }) => {
  const history = useHistory();

  const handleDisplayProject = (id) => {
    history.push(getProjectRoute(id));
  };
  return (
    <Base>
      <img className={classes.image} src={headerImage} alt="header" />
      <div className={classes.home}>
        <h2 className={classes.subtitle}> Derniers projets publiés</h2>
        <div className={classes.latestProject}>
          {/* TODO Get and give cardId to handleDisplayProject */}
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(2)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(2)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
          <CardProject onClickOnBodyCard={() => handleDisplayProject(1)} />
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
