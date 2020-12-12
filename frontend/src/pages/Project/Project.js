import React, { useEffect, useState } from 'react';

import {
  bool, func, object, string,
} from 'prop-types';
import { Grid, Avatar } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import githubLogo from 'src/common/assets/images/logo-github.png';
import profileLogo from 'src/common/assets/images/avatar.png';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import ReactQuill from 'react-quill';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Comments from 'src/common/components/Comments';

const Project = ({
  classes, fetchProject, project, loading, redirect,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const { id } = useParams();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchProject(id);
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  const handleClickProfile = () => {
    history.push(getProfileRoute(project.user.id));
  };

  return (
    <Base loading={loading}>
      <div className={classes.projectContainer}>
        <h2 className={classes.subtitle}>{project.title}</h2>
        <div className={classes.tagsContainer}>
          {project.tags.map((tag) => {
            if (tag !== null) {
              return (
                <div key={tag.id} className={classes.tag}>{tag.name}</div>
              );
            }
          })}
        </div>
        <Grid item xs={12} sm={12} md={9} className={classes.imageContainer}>
          <Grid item xs={12} sm={12} md={9} className={classes.linksGrid}>
            <div onClick={handleClickProfile} className={classes.profile}>
              <Avatar
                alt={project.user.username}
                src={project.user.userImage || profileLogo}
                className={classes.profileLogo}
              />
              {project.user.username}
            </div>
            {(project.githubLink || project.projectLink)
          && (
          <div className={classes.iconButton}>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon className={classes.menuIcon} />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              {project.githubLink
              && (
              <MenuItem onClick={handleClose} className={classes.link}>
                <a href={project.githubLink} className={classes.githubLink}>
                  <img src={githubLogo} alt="project-header" />
                  Github
                </a>
              </MenuItem>
              )}
              {project.projectLink
                && (
                <MenuItem onClick={handleClose} className={classes.link}>
                  <a href={project.projectLink}>
                    Projet en ligne
                  </a>
                </MenuItem>
                )}
            </Menu>
          </div>
          )}
          </Grid>
          <img className={classes.image} src={project.image} alt="project-header" />
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

        <Comments comments={project.comments} idProject={project.id} />

      </div>
    </Base>
  );
};

Project.propTypes = {
  ...classesProps,
  fetchProject: func.isRequired,
  project: object.isRequired,
  loading: bool.isRequired,
  redirect: string.isRequired,
};

export default Project;
