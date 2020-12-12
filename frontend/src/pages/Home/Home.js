import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import headerImage from './header-image.png';

const Home = ({
  classes,
  getProjects,
  projects,
  loading,
  isLogged,
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
                  isLogged={isLogged}
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
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getProjects: PropTypes.func.isRequired,
  projects: PropTypes.shape({
  }).isRequired,
};

export default Home;
