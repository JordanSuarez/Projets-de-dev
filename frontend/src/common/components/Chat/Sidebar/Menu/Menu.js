import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Menu = ({
  classes,
  getProfiles,
  profiles,
  loading,
  setStatus,
  status,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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
    if (width > 959 && width < 1280) {
      setShowMenu(true);
    }
    else {
      setShowMenu(false);
    }
  }, [width]);
  /* ------------------------------------------------------ */

  // Changement d'onglet selectionné
  useEffect(() => {
  }, [status]);

  const openMenu = () => {
    setStatus('menuOpen');
    setShowMenu(true);
  };

  const closeMenu = () => {
    setStatus('chatOpen');
    setShowMenu(false);
  };

  const openUsersList = () => {
    setStatus('usersListOpen');
  };
  const openChannelsList = () => {
    setStatus('channelsListOpen');
  };
  const openConversationsList = () => {
    setStatus('conversationsListOpen');
  };

  return (
    <>
      <Button className={classes.showMenu} onClick={openMenu}>
        {showMenu === false && <KeyboardArrowDownIcon />}
      </Button>

      <div className={classes.menuContainer}>

        {showMenu === true && (
        <>
          <Button className={classes.showMenu} onClick={closeMenu}>
            <CloseIcon />
          </Button>
          <div className={classes.menu}>
            <div className={classes.menuItem} onClick={openChannelsList}>
              <div className={width > 960 && width < 1280 && (status === 'chatOpen' || status === 'channelsListOpen') ? classes.menuItemContentSelected : classes.menuItemContent}>
                <ForumIcon className={classes.menuItemIcon} />
                <p className={classes.menuItemTitle}>Liste des salons</p>
              </div>
              <ChevronRightIcon className={classes.menuItemArrow} />
            </div>
            {width < 1280 && (
              <div className={classes.menuItem} onClick={openUsersList}>
                <div className={width > 960 && width < 1280 && status === 'usersListOpen' ? classes.menuItemContentSelected : classes.menuItemContent}>
                  <GroupIcon className={classes.menuItemIcon} />
                  <p className={classes.menuItemTitle}>Liste des utilisateurs</p>
                </div>
                <ChevronRightIcon className={classes.menuItemArrow} />
              </div>
            )}
            <div className={classes.menuItemHidden}>
              <div className={classes.menuItemContent}>
                <ChatIcon className={classes.menuItemIcon} onClick={openConversationsList} />
                <p className={classes.menuItemTitle}>Liste des conversations</p>
              </div>
              <ChevronRightIcon className={classes.menuItemArrow} />
            </div>
          </div>
        </>
        )}
      </div>
    </>
  );
};

Menu.propTypes = {
  ...classesProps,
  setStatus: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default Menu;
