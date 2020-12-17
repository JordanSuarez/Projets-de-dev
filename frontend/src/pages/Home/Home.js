import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import headerImage from './header-home.jpg';

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
        <div className={classes.textContainer}>
          <h2 className={classes.subtitle}> Projets de Dev</h2>
          <p className={classes.homeText}>
            Une plateforme crée par des développeurs, pour des développeurs,
            où vous pourrez lister vos projets de développement, cherchez de l'inspiration, partager, échanger
          </p>
        </div>

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
        <div className={classes.presentation}>
          <img className={classes.robot} src="" alt="robot" />
          <div className={classes.title}>Title</div>
          <p className={classes.desciptionSite}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
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
