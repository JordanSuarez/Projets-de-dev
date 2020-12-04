import React, { useEffect } from 'react';

import { func, object } from 'prop-types';
import { Grid, Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import githubLogo from 'src/common/assets/images/logo-github.png';
import profileLogo from 'src/common/assets/images/avatar.png';

const Project = ({ classes, fetchProject, project }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchProject(id);
  }, []);

  return (
    <Base className={classes.body}>
      <h2 className={classes.subtitle}>{project.title}</h2>
      <div className={classes.tagsContainer}>
        <div className={classes.tag}>Tag 1</div>
        <div className={classes.tag}>Tag 1</div>
        <div className={classes.tag}>Tag 1</div>
      </div>
      <img className={classes.image} src={project.image} alt="project-header" />
      <Grid container direction="row-reverse" className={classes.linkContainer}>
        <Grid item xs={12} sm={6} className={classes.profileGrid}>
          <a href={project.github_link} className={classes.profile}>
            <Avatar alt="lePseudo" src={profileLogo} className={classes.profileLogo} />
            Pikachu
          </a>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.linkGrid}>
          {project.github_link
                && (
                <a href={project.github_link}>
                  <img className={classes.logo} src={githubLogo} alt="project-header" />
                </a>
                )}
          <div className={classes.link}>
            {project.github_link
                && (
                <a href={project.github_link}>
                  Github
                </a>
                )}
            {project.project_link
                && (
                <a href={project.project_link}>
                  Projet en ligne
                </a>
                )}
          </div>
        </Grid>
      </Grid>
      <div className={classes.description}>
        <h3 className={classes.subtitle}>Description</h3>
        {project.description}
      </div>
    </Base>
  );
};

Project.propTypes = {
  ...classesProps,
  fetchProject: func.isRequired,
  project: object.isRequired,
};

export default Project;
