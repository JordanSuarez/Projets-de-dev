/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Loader from 'src/common/components/Loader';
import avatar from './avatar.png';


const User = ({
  classes,
  profileSelected,
  loading,
  setStatus,
  status,
}) => {
  /* ---------------------- a stocker dans le state ---------------------------- */
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
      // setShowList(true);
      // console.log(width, ' je veux voir la liste');
    }
    else {
      //
      // console.log(width, ' je veux pas voir la liste');
    }
  }, [width]);
  /* ------------------------------------------------------ */
  const handleDisplayProfile = () => {
    setStatus('chatClosed');
  };

  const closedProfileUser = () => {
    setStatus('usersListOpen');
  };

  return (
    <>
      {(status === 'userProfileOpen') && (
        <div className={classes.containerUser}>
          <Button className={classes.closeUser} onClick={closedProfileUser}>
            <CloseIcon />
          </Button>
          <div className={classes.user}>
            <h4 className={classes.userTitle}>Infos</h4>
            <Avatar alt="avatar" src={profileSelected.userImage || avatar} className={classes.userImage} />
            <h4 className={classes.username}>{profileSelected.username}</h4>
            { profileSelected.bio !== null ? <p className={classes.userBio}>{profileSelected.bio}</p> : <p className={classes.userBio}>Cet utilisateur n'a pas encore renseigner de description</p>}
            <Router>
              <a href={getProfileRoute(profileSelected.id)} onClick={() => handleDisplayProfile()}>
                <Button
                  className={classes.userProfile}
                  variant="contained"
                  type="button"
                >
                  Voir son profil
                </Button>
              </a>
            </Router>
          </div>
        </div>
      )}
    </>
  );
};

User.propTypes = {
  ...classesProps,
  loading: PropTypes.bool.isRequired,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  profileSelected: PropTypes.object.isRequired,
};

export default User;
