import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
} from '@material-ui/core';

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

  console.log(profiles);
  return (
    <div className="users">
      {arrayProfiles.map((profile) => (
        <div
          key={profile.id}
          onClick={() => viewProfile(profile.id, profile.username)}
        >
          {profile.username}
        </div>
      ))}
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
