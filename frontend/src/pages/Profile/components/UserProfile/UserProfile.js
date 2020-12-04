/* eslint-disable react/jsx-indent */
import React from 'react';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
  Avatar,
  Button,
} from '@material-ui/core';

import Base from 'src/common/components/Base';
import avatar2 from './avatar.png';

const UserProfile = ({classes}) => {
  const history = useHistory();
  const editProfile = () => history.push(getEditionProfileRoute());
  const newProject = () => history.push(getCreationProjectRoute());
  return (
    <Base>
      <div className={classes.container}>
        <h2 className={classes.subtitle}> Mon profil </h2>
        <div className={classes.column}>
          <div className={classes.rowCenter}>
            <Avatar alt="lePseudo" src={avatar2} className={classes.large} />
            <h3 className={classes.username}>TODO username</h3>
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
        </div>
      </div>
    </Base>
  );
};

UserProfile.propTypes = {
  ...classesProps,
};

export default UserProfile;
