import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import Carousel from 'src/common/components/Carousel';
import headerImage from 'src/common/assets/images/header-home.jpg';
import robot from 'src/common/assets/images/robot.png';

const Home = ({
  classes,
  getProjects,
  projects,
  loading,
  isLogged,
  getMyLikes,
  myLikes,
  clearState,
}) => {
  useEffect(() => {
    clearState();
    getProjects('?limit=12', '&offset=0');
    if (isLogged) {
      getMyLikes();
    }
  }, []);
  const arrayProjects = Object.values(projects);

  const handleDragStart = (e) => e.preventDefault();

  const cardsProjects = arrayProjects.map((project) => {
    let like = false;

    myLikes.map((myLike) => {
      if ((project.id === myLike.projectId) && (myLike.isLike === 1)) {
        like = true;
      }
    });
    return (
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
        like={like}
        vote={project.vote}
        onDragStart={handleDragStart}
        className={classes.cardProject}
      />
    );
  });

  return (
    <Base loading={loading}>
      <img className={classes.image} src={headerImage} alt="header" style={{ backgroundPosition: 'left' }} />
      <div className={classes.home}>
        <div className={classes.textContainer}>
          <h2 className={classes.subtitle}>Projets de Dev</h2>
          <p className={classes.homeText}>
          Le site où on partage le fruit de son expérience en matière de création de projets de dev, que ce soit un projet mené individuellement ou à plusieurs.
          </p>
        </div>
        <h2 className={classes.subtitleProjects}> Derniers projets publiés</h2>
        <Carousel items={cardsProjects} />
        <div className={classes.latestProject}>
          <div className={classes.container}>
            <div className={classes.listCard} />
          </div>
        </div>
        <div className={classes.containerPresentation}>
          <div className={classes.presentation}>
            <img className={classes.robot} src={robot} alt="robot" />
            <div className={classes.title}>Projets de dev fait par des Dev’s pour des Dev’s !</div>
            <p className={classes.descriptionSite}>
              L’idée a germé quand l’un d’entre nous s’est rendu compte qu’il n’était pas facile de partager nos projets et idées de projets avec d’autres personnes.
              Pour remédier à cette problématique, il a fallu trouver une solution : une plateforme  qui serait à la fois visuelle, pratique et qui permettrait à n’importe quel développeur de partager ses idées et créations rapidement, en quelques clics ! 
            </p>
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
  getMyLikes: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  myLikes: PropTypes.array,
  projects: PropTypes.shape({
  }).isRequired,

};

Home.defaultProps = {
  myLikes: [],
};
export default Home;
