import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Loader from 'src/common/components/Loader';
import avatar from './avatar.png';

const Users = ({
  classes,
  getProfiles,
  profiles,
  loading,
  setStatus,
  status,
}) => {
  const arrayProfiles = Object.values(profiles);
  const [profileSelected, setProfileSelected] = useState('');
  const [showList, setShowList] = useState(false);

  /* ------------------------------------------------------- */
  // Affichage de la liste des users si width > 959
  // sinon bouton affichage du bouton pour ouvrir la liste
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });
  useEffect(() => {
    if (width > 959) {
      setShowList(true);
      console.log(width, ' je veux voir la liste');
    }
    else {
      setShowList(false);
      console.log(width, ' je veux pas voir la liste');
    }
  }, [width]);
  /* ------------------------------------------------------ */

  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
  }, [profileSelected]);

  const showListUser = () => {
    setStatus(2);
    setShowList(true);
  };

  const closedListUser = () => {
    setStatus(1);
    setShowList(false);
  };

  return (
    <div className={classes.users}>
      <Button className={classes.showProfileMobile} onClick={showListUser}>
        {showList === false && <KeyboardArrowDownIcon />}
      </Button>
      {showList === true && (
        <>
          <Button className={classes.showProfileMobile} onClick={closedListUser}>
            {showList === true && <CloseIcon />}
          </Button>
          <h4 className="title">Liste des utilisateurs</h4>
          <div className={classes.containerUsers}>
            {loading && <Loader />}
            {!loading && (
            <>
              {arrayProfiles.map((profile) => (
                <div
                  className={classes.user}
                  key={profile.id}
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
        </>
      )}
    </div>
  );
};

Users.propTypes = {
  ...classesProps,
  profiles: PropTypes.shape({
  }).isRequired,
  getProfiles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired,
};

export default Users;
