import React, { useEffect } from 'react';

import PropTypes, { string } from 'prop-types';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CardProject from 'src/common/components/CardProject';
import Base from 'src/common/components/Base';
import { isEmpty } from 'lodash';
import avatar2 from './avatar.png';

const UserProfile = ({
  classes,
  getProfile,
  loading,
  userProfile,
  handleDeleteProject,
  handleDeleteUserProfile,
  redirect,
}) => {
  const history = useHistory();

  useEffect(() => {
    getProfile();

    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  const deleteProfile = () => handleDeleteUserProfile();
  const editProfile = () => history.push(getEditionProfileRoute());
  const newProject = () => history.push(getCreationProjectRoute());

  const buttons = [
    {
      id: 1, func: deleteProfile, label: 'Supprimer mon compte',
    },
    {
      id: 2, func: editProfile, label: 'Modifier mon compte',
    },
    {
      id: 3, func: newProject, label: 'Ajouter un projet',
    },
  ];
  console.log('userprofile page', localStorage.getItem('token'));
  return (
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <h2 className={classes.subtitle}> Mon profil </h2>
          <div className={classes.column}>
            <div className={classes.rowCenter}>
              <Avatar alt="avatar" src={userProfile.userImage || avatar2} className={classes.large} />
              <h3 className={classes.username}>{userProfile.username}</h3>
            </div>
            <div className={classes.rowCenter}>
              {buttons.map((button) => (
                <Button
                  key={button.id}
                  className={classes.button}
                  variant="contained"
                  type="button"
                  onClick={button.func}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h2 className={classes.subtitle}>
              Liste des projets
            </h2>
            <div className={classes.cardContainer}>
              {isEmpty(userProfile.projects) && (
              <p>Cet utilisateur n'a pas encore de projet</p>
              )}
              {!isEmpty(userProfile.projects)
                && userProfile.projects.map(({
                  id: projectId, title, description, tags, image,
                }) => (
                  <CardProject
                    key={projectId}
                    projectId={projectId}
                    title={title}
                    tags={tags}
                    description={description}
                    userId={userProfile.id}
                    userImage={userProfile.userImage}
                    image={image}
                    projectOwnerOptions
                    handleDeleteProject={handleDeleteProject}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    </Base>
  );
};

UserProfile.propTypes = {
  ...classesProps,
  getProfile: PropTypes.func.isRequired,
  handleDeleteProject: PropTypes.func.isRequired,
  handleDeleteUserProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  redirect: string.isRequired,
};

export default UserProfile;
