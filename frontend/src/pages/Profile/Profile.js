import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { classes as classesProps } from 'src/common/classes';
import { useParams, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Base from 'src/common/components/Base';
import CardProject from 'src/common/components/CardProject';
import Carousel from 'src/common/components/Carousel';
import { isEmpty } from 'lodash';
import avatar2 from 'src/common/assets/images/avatar.png';

const Profile = ({
  classes,
  getProfile,
  loading,
  profile,
  isLogged,
  redirect,
  getMyLikes,
  myLikes,
}) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getProfile(id);
    if (redirect.length > 0) {
      history.push(redirect);
    }
    if (isLogged) {
      getMyLikes();
    }
  }, [redirect]);

  const cardsProjects = profile.projects.map(({
    id: projectId, title, description, tags, image, vote,
  }) => {
    let like = false;
    myLikes.map((myLike) => {
      if ((projectId === myLike.projectId) && (myLike.isLike === 1)) {
        like = true;
      }
    });
    return (
      <CardProject
        key={projectId}
        projectId={projectId}
        title={title}
        tags={tags}
        description={description}
        userId={profile.id}
        userImage={profile.userImage}
        image={image}
        isLogged={isLogged}
        like={like}
        vote={vote}
      />
    );
  });

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
            <div className={classes.containerBio}>
              {profile.bio && (
              <p className={classes.bio}>
                {profile.bio}
              </p>
              )}
              {!profile.bio && (
              <p className={classes.bio}>
                Cet utilisateur n'a pas encore renseigné de description.
              </p>
              )}
            </div>
          </div>
          <div>
            <h2 className={classes.subtitle}>
              Liste de ses projets
            </h2>
            <div className={classes.cardContainer}>
              {isEmpty(profile.projects) && (
                <p>Cet utilisateur n'a pas encore de projet</p>
              )}
              {!isEmpty(profile.projects)
                && (
                <Carousel items={cardsProjects} />
                )}
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
    bio: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.any).isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
  getMyLikes: PropTypes.func.isRequired,
  myLikes: PropTypes.array,
};

Profile.defaultProps = {
  profile: PropTypes.shape({
    id: null,
    userImage: '',
  }),
  myLikes: [],
};

export default Profile;
