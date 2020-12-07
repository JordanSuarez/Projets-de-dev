/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import {
  Avatar,
} from '@material-ui/core';

import Base from 'src/common/components/Base';
import avatar2 from './avatar.png';

const Profile = ({
  classes,
  getProfile,
  loading,
  profile,
}) => {
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Base>
      {loading && <div>Chargement en cours...</div>}
      {!loading && (
      <>
        <div className={classes.container}>
          <div className={classes.column}>
            <div className={classes.rowCenter}>
              {!profile.userImage && (
                <Avatar alt="avatar" src={avatar2} className={classes.large} />
              )}
              {profile.userImage && (
                <Avatar alt="avatar" src={profile.userImage} className={classes.large} />
              )}
              <h3 className={classes.username}>{profile.username}</h3>
            </div>
          </div>
          <div>
            <h2 className={classes.subtitle}>
              Liste des projet
            </h2>
            <div>
              {profile.Projects.length === 0 && (
                <p> Cet utilisateur n'as pas encore de projet</p>
              )}
              {profile.Projects.length !== 0 && (
                // TODO charger les cardProject
                <p>Il a des projets, TODO </p>
              )}
            </div>
          </div>
        </div>
      </>
      )}
    </Base>
  );
};

Profile.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Profile;
