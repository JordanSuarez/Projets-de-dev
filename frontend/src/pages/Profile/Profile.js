import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { useParams } from 'react-router-dom';
import {
  Avatar,
} from '@material-ui/core';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import avatar2 from './avatar.png';

const Profile = ({
  classes,
  getProfile,
  loading,
  profile,
}) => {
  const { id } = useParams();

  useEffect(() => {
    getProfile(id);
  }, []);

  return (
    <Base loading={loading}>
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
              {profile.projects.length === 0 && (
                <p> Cet utilisateur n'as pas encore de projet</p>
              )}
              {profile.projects.length > 0
                && profile.projects.map(({
                  id: projectId, title, description, tags, image,
                }) => (
                  <CardProject
                    key={projectId}
                    projectId={projectId}
                    title={title}
                    tags={tags}
                    description={description}
                    userId={profile.id}
                    userImage={profile.userImage}
                    image={image}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    </Base>
  );
};

Profile.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string.isRequired,
    userImage: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  }),
  loading: PropTypes.bool.isRequired,
};

Profile.defaultProps = {
  profile: PropTypes.shape({
    id: null,
    userImage: '',
  }),
};

export default Profile;
