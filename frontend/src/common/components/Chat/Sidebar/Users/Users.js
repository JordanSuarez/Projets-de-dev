import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
  Avatar,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import avatar from './avatar.png';


const Users = ({
  classes,
  getProfiles,
  profiles,
}) => {
  const arrayProfiles = Object.values(profiles);
  const [profileSelected, setProfileSelected] = useState('');
  const [showList, setShowList] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
  }, [profileSelected]);

  const showListUser = () => {
    setShowList(!showList);
  };
  return (
    <div className="users">
      <Button className={classes.showProfileMobile} onClick={showListUser}>
        {showList === true ? <CloseIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      {showList === true && (
        <>
          <h4 className={classes.listTitle}>Liste des utilisateurs</h4>
          <div className={classes.containerUsers}>
            
            {arrayProfiles.map((profile) => (
              <div
                className={classes.user}
                key={profile.id}
                onClick={() => viewProfile(profile.id, profile.username)}
              >

                <Avatar alt="avatar" src={profile.listUserImage || avatar} className={classes.userImage} />
                <div className={classes.listUsername}>
                  {profile.username}
                </div>
              </div>
            ))}
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
};

Users.defaultProps = {

};

export default Users;
