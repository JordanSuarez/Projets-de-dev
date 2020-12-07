/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
  Avatar,
  Button,
} from '@material-ui/core';

import Base from 'src/common/components/Base';
import avatar2 from './avatar.png';

const UserProfile = ({
  classes,
  getProfile,
  loading,
  userProfile,
}) => {
  useEffect(() => {
    getProfile();
  }, []);

  const history = useHistory();
  const editProfile = () => history.push(getEditionProfileRoute());
  const newProject = () => history.push(getCreationProjectRoute());
  return (
    <Base>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
      <>

      <div className={classes.container}>
        <h2 className={classes.subtitle}> Mon profil </h2>
        <div className={classes.column}>
          <div className={classes.rowCenter}>
          {!userProfile.userImage && (
            <Avatar alt="avatar" src={avatar2} className={classes.large} />
          )}
          {userProfile.userImage && (
            <Avatar alt="avatar" src={`data:image/jpeg;base64,${userProfile.userImage}`} className={classes.large} />
          )}
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
          Liste des projet
        </h2>
        <div>
        {userProfile.Projects.length === 0 && (
            <p> Je n'ai pas encore de projet</p>
        )}
          {userProfile.Projects.length !== 0 && (
            // TODO charger les cardProject
            <p>J'ai des projets TODO</p>
          )}
        </div>
        </div>
      </div>
      </>
      )}
    </Base>
  );
};

UserProfile.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UserProfile;
