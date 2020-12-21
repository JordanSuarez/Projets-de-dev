import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import GroupIcon from '@material-ui/icons/Group';
import Loader from 'src/common/components/Loader';
import avatar from './avatar.png';

const Users = ({
  classes,
  getProfiles,
  profiles,
  loading,
  setStatus,
  status,
  setUserSelected,
}) => {
  const arrayProfiles = Object.values(profiles);

  /* ---------------------- a stocker dans le state ---------------------------- */
  // Affichage de la liste des users sur la droite si width > 1280
  // si width entre 960 et 1279 affichage sur la gauche
  // sinon bouton affichage du bouton pour ouvrir la liste
  const [showUserList, setShowUserList] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  useEffect(() => {
    if (width > 1280) {
      setShowUserList(true);
    }
    else {
      setShowUserList(false);
    }
  }, [width]);
  /* ------------------------------------------------------ */

  useEffect(() => {
    getProfiles();
  }, []);

  const closedListUser = () => {
    setStatus('menuOpen');
  };
  return (
    <>
      {((status === 'usersListOpen') || (showUserList === true)) && (
      <div className={classes.users}>
        <Button className={classes.closedList} onClick={closedListUser}>
          <CloseIcon />
        </Button>
        <h4 className={classes.title}>
          {(width < 960 || width > 1280) && (
            <GroupIcon className={classes.menuItemIcon} />
          )}
          Liste des utilisateurs
        </h4>
        <div className={classes.containerUsers}>
          {loading && <Loader />}
          {!loading && (
            <>
              {arrayProfiles.map((profile) => (
                <div
                  className={classes.user}
                  key={profile.id}
                  onClick={() => {
                    setUserSelected(profile);
                    setStatus('userProfileOpen');
                  }}
                >
                  <Avatar alt="avatar" src={profile.userImage || avatar} className={classes.userImage} />
                  <div className={classes.listUsername}>
                    {profile.username}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      )}
    </>
  );
};

Users.propTypes = {
  ...classesProps,
  profiles: PropTypes.shape({
  }).isRequired,
  getProfiles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  setUserSelected: PropTypes.func.isRequired,
};

export default Users;
