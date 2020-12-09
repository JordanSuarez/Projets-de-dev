import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CardProject from 'src/common/components/CardProject';
import Base from 'src/common/components/Base';
import { isEmpty } from 'lodash';
import avatar2 from './avatar.png';

const UserProfile = ({
  classes,
  getProfile,
  loading,
  userProfile,
  handleDeleteProject,
}) => {
  useEffect(() => {
    getProfile();
  }, []);

  const history = useHistory();
  const editProfile = () => history.push(getEditionProfileRoute());
  const newProject = () => history.push(getCreationProjectRoute());
  return (
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <h2 className={classes.subtitle}> Mon profil </h2>
          <div className={classes.column}>
            <div className={classes.rowCenter}>
              <Avatar alt="avatar" src={userProfile.userImage || avatar2} className={classes.large} />
              <h3 className={classes.username}>{userProfile.username}</h3>
            </div>
            <div className={classes.rowCenter}>
              <Button
                className={classes.button}
                variant="contained"
                type="button"
                onClick={editProfile}
              >
                Editer
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                type="button"
                onClick={newProject}
              >
                Ajouter un projet
              </Button>
            </div>
          </div>
          <div>
            <h2 className={classes.subtitle}>
              Liste des projets
            </h2>
            <div className={classes.cardContainer}>
              {isEmpty(userProfile.projects) && (
              <p>Cet utilisateur n'a pas encore de projet</p>
              )}
              {!isEmpty(userProfile.projects)
                && userProfile.projects.map(({
                  id: projectId, title, description, tags, image,
                }) => (
                  <CardProject
                    key={projectId}
                    projectId={projectId}
                    title={title}
                    tags={tags}
                    description={description}
                    userId={userProfile.id}
                    userImage={userProfile.userImage}
                    image={image}
                    projectOwnerOptions
                    handleDeleteProject={handleDeleteProject}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    </Base>
  );
};

UserProfile.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserProfile;
