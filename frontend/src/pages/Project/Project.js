import React, { useEffect } from 'react';

import { func, object } from 'prop-types';
import { Grid, Avatar } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import githubLogo from 'src/common/assets/images/logo-github.png';
import profileLogo from 'src/common/assets/images/avatar.png';
import { get } from 'lodash';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import ReactQuill from 'react-quill';

const Project = ({ classes, fetchProject, project }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    fetchProject(id);
  }, []);

  const handleClickProfile = () => {
    history.push(getProfileRoute(project.UserId));
  };

  // TODO get tags with array form instead of multiple object
  return (
    <Base className={classes.projectContainer}>
      <h2 className={classes.subtitle}>{project.title}</h2>
      <div className={classes.tagsContainer}>
        <div className={classes.tag}>{get(project, 'Tag.name')}</div>
        <div className={classes.tag}>{get(project, 'Tag2.name')}</div>
        <div className={classes.tag}>{get(project, 'Tag3.name')}</div>
        <div className={classes.tag}>{get(project, 'Tag4.name')}</div>
        <div className={classes.tag}>{get(project, 'Tag5.name')}</div>
        <div className={classes.tag}>{get(project, 'Tag6.name')}</div>
      </div>
      <Grid item xs={12} sm={12} md={9} className={classes.imageContainer}>
        <img className={classes.image} src={get(project, 'image')} alt="project-header" />
      </Grid>
      <Grid item xs={12} sm={12} md={9} direction="row-reverse" className={classes.linkContainer}>
        <Grid item xs={12} sm={6} className={classes.profileGrid}>
          <div onClick={handleClickProfile} className={classes.profile}>
            <Avatar alt={get(project, 'User.username')} src={get(project, 'User.userImage') || profileLogo} className={classes.profileLogo} />
            {get(project, 'User.username')}
          </div>
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
      <Grid item xs={12} sm={12} md={9} className={classes.description}>
        <h3 className={classes.subtitle}>Description</h3>
        <ReactQuill
          value={project.description}
          readOnly
          theme="bubble"
          className={classes.quillEditor}
        />
      </Grid>
    </Base>
  );
};

Project.propTypes = {
  ...classesProps,
  fetchProject: func.isRequired,
  project: object.isRequired,
};

export default Project;
