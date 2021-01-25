import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CardProject from 'src/common/components/CardProject';
import Base from 'src/common/components/Base';
import { isEmpty } from 'lodash';
import AlertDialog from 'src/common/components/AlertDialog';
import Carousel from 'src/common/components/Carousel';
import avatar2 from 'src/common/assets/images/avatar.png';
import { alertUserProfile, alertUserProject } from './alertTextProvider';

const UserProfile = ({
  classes,
  getProfile,
  loading,
  userProfile,
  handleDeleteProject,
  handleDeleteUserProfile,
  redirect,
  isLogged,
}) => {
  const history = useHistory();
  const [toggleWindow, setToggleWindow] = useState(false);

  useEffect(() => {
    getProfile();
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  // The AlertDialog context
  const [context, setContext] = useState({
    alertId: null,
    title: '',
    content: '',
    isOpen: false,
  });

  // Destructuring context to use these key
  const {
    alertId, title, content, isOpen,
  } = context;

  // Called from delete buttons, and set context where it was called
  // Get the projectId from handleDeleteProject method's CardProject
  const openDeleteModal = (item, projectId = null) => {
    setContext({
      alertId: item.id,
      title: item.title,
      content: item.content,
      isOpen: true,
      projectId,
    });
  };

  const editProfile = () => history.push(getEditionProfileRoute());
  const newProject = () => history.push(getCreationProjectRoute());

  // Returns the proper method depending on context
  const agreeDeleteAction = () => {
    switch (alertId) {
      case alertUserProfile.id: {
        // close modal
        setContext({ ...context, isOpen: false });
        return handleDeleteUserProfile();
      }
      case alertUserProject.id: {
        // close modal
        setContext({ ...context, isOpen: false });
        return handleDeleteProject(context.projectId);
      }
      default: return null;
    }
  };

  // Loop on array to not repeat the button component
  const buttons = [
    {
      id: 1, method: () => openDeleteModal(alertUserProfile), label: 'Supprimer mon compte',
    },
    {
      id: 2, method: editProfile, label: 'Modifier mon compte',
    },
    {
      id: 3, method: newProject, label: 'Ajouter un projet',
    },
  ];

  // Data for Carousel
  const cardsProjects = userProfile.projects.map(({
    id: projectId, title: projectTitle, description, tags, image,
  }) => (
    <CardProject
      key={projectId}
      projectId={projectId}
      title={projectTitle}
      tags={tags}
      description={description}
      userId={userProfile.id}
      userImage={userProfile.userImage}
      image={image}
      projectOwnerOptions
      handleDeleteProject={(id) => openDeleteModal(alertUserProject, id)}
      isLogged={isLogged}
      like={false}
    />
  ));

  return (
    <Base loading={loading}>
      <>
        <div className={classes.container}>
          <AlertDialog
            open={isOpen}
            title={title}
            content={content}
            agreeLabelButton="Accepter"
            disagreeLabelButton="Refuser"
            onAgree={agreeDeleteAction}
            onCancel={() => setContext({ ...context, isOpen: false })}
          />
          <div className={classes.column}>
            <div className={classes.rowCenter}>
              <h2 className={classes.title}> Mon profil </h2>
              <Avatar alt="avatar" src={userProfile.userImage || avatar2} className={classes.large} />
              <h3 className={classes.username}>{userProfile.username}</h3>
            </div>
            <div className={classes.containerBio}>
              {userProfile.bio && (
                <p className={classes.bio}>
                  {userProfile.bio}
                </p>
              )}
              {!userProfile.bio && (
                <p className={classes.bio}>
                  Renseignez votre decription
                </p>
              )}
            </div>
            <div className={classes.rowCenter}>
              {buttons.map(({ id, label, method }) => (
                <Button
                  key={id}
                  className={id === 1 ? classes.deleteButton : classes.button}
                  variant="contained"
                  type="button"
                  onClick={method}
                >
                  {label}
                </Button>
              ))}
            </div>
            <div className={classes.toggleViewHeader}>
              <h2
                className={!toggleWindow ? classes.subtitleActive : classes.subtitle}
                onClick={() => setToggleWindow(false)}
              >
                Mes projets
              </h2>
            </div>
          </div>
          {!toggleWindow && (
          <div>
            <div className={classes.cardContainer}>
              {isEmpty(userProfile.projects) && (
              <p>Je n'ai pas encore de projet</p>
              )}
              {!isEmpty(userProfile.projects)
                && <Carousel items={cardsProjects} />}
            </div>
          </div>
          )}
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
  isLogged: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
  projects: PropTypes.array,
};

UserProfile.defaultProps = {
  projects: [],
};
export default UserProfile;
