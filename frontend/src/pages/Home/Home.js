import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';

import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';

import { bool } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProjectRoute } from 'src/common/routing/routesResolver';
import headerImage from './header-image.png';

// eslint-disable-next-line arrow-body-style
const Home = ({
  classes,
  getProjects,
  projects,
  loading,
}) => {
  useEffect(() => {
    getProjects();
  }, []);
  const arrayProjects = Object.values(projects);
  return (
    <Base loading={loading}>
      <img className={classes.image} src={headerImage} alt="header" />
      <div className={classes.home}>
        <h2 className={classes.subtitle}> Derniers projets publiés</h2>
        <div className={classes.latestProject}>
          <div className={classes.container}>
            <div className={classes.listCard}>
              {arrayProjects.map((project) => (
                <CardProject
                  key={project.id}
                  projectId={project.id}
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  userId={project.user.id}
                  userImage={project.user.userImage}
                  image={project.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

Home.propTypes = {
  ...classesProps,
  loading: bool.isRequired,
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.shape({
  }).isRequired,
};

export default Home;
