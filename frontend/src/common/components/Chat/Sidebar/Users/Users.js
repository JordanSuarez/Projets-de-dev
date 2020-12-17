import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
  Avatar,
  Button,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import avatar from './avatar.png';

const Users = ({
  classes,
  getProfiles,
  profiles,
}) => {
  const arrayProfiles = Object.values(profiles);
  const [profileSelected, setProfileSelected] = useState('');
  const history = useHistory();

  useEffect(() => {
    getProfiles();
  }, []);

  useEffect(() => {
    console.log(profileSelected);
  }, [profileSelected]);

  const showList = () => {
    console.log('click button');
  };
  return (
    <div className="users">
      <Button className={classes.showProfileMobile} onClick={showList}>
        <KeyboardArrowDownIcon />
      </Button>
      <div className={classes.containerUsers}>
        {arrayProfiles.map((profile) => (
          <div
            className={classes.user}
            key={profile.id}
            onClick={() => viewProfile(profile.id, profile.username)}
          >

            <Avatar alt="avatar" src={profile.userImage || avatar} className={classes.userImage} />
            <div>
              {profile.username}
            </div>
          </div>
        ))}
      </div>
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
