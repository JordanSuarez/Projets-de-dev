import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import headerImage from './header-home.jpg';
import robot from './robot.png';

const Home = ({
  classes,
  getProjects,
  projects,
  loading,
  isLogged,
  getMyLikes,
  myLikes,
}) => {
  useEffect(() => {
    getProjects('?limit=12', '&offset=0');
    if (isLogged) {
      getMyLikes();
    }
  }, []);
  const arrayProjects = Object.values(projects);
  return (
    <Base loading={loading}>
      <img className={classes.image} src={headerImage} alt="header" style={{backgroundPosition: 'left'}} />
      <div className={classes.home}>
        <div className={classes.textContainer}>
          <h2 className={classes.subtitle}> Projets de Dev</h2>
          <p className={classes.homeText}>
            Une plateforme crée par des développeurs, pour des développeurs,
            où vous pourrez lister vos projets de développement, cherchez de l'inspiration,
            partager et échanger!
          </p>
        </div>

        <h2 className={classes.subtitleProjects}> Derniers projets publiés</h2>
        <div className={classes.latestProject}>
          <div className={classes.container}>
            <div className={classes.listCard}>
              {arrayProjects.map((project) => {
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
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={classes.containerPresentation}>
          <div className={classes.presentation}>
            <img className={classes.robot} src={robot} alt="robot" />
            <div className={classes.title}>Projets de dev fait par des Dev’s POUR des Dev’s !</div>
            <p className={classes.descriptionSite}>
              L’idée a germé quand l’un d’entre nous s’est rendu compte qu’il n’était pas si facile que cela de partager nos projets et idées de projets avec d’autres personnes.
              Pour remédier à cette problématique, il a fallu trouver une solution ! Mais il fallait une plateforme  qui serait à la fois visuelle, pratique et qui permettrait à n’importe quel développeur de partager ses idées et créations rapidement, en quelques clics ! 
              Notre petite équipe s’est donc attelée à la tâche ! Nous avons transpiré, crié, maudit et aimé le saint javascript.
              C’est ainsi qu’après non pas 9 mais seulement 1 mois de gestation, Projets De Dev a enfin pu voir le jour ! Bon ok, il était pas tout à fait fini, il manquait peut-être un œil par-ci et un bras par là mais l’essentiel était là ! 
              C’est ainsi que Projets de Dev est né, un beau matin d’été… (ouais c’était en décembre mais ça rimait ^^ )
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
  myLikes: PropTypes.array,
  projects: PropTypes.shape({
  }).isRequired,

};

Home.defaultProps = {
  myLikes: [],
};
export default Home;
