import React, { useEffect, useState } from 'react';

import PropTypes, { string } from 'prop-types';
import { getEditionProfileRoute, getCreationProjectRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import { Avatar, Button } from '@material-ui/core';
import CardProject from 'src/common/components/CardProject';
import Base from 'src/common/components/Base';
import { isEmpty } from 'lodash';
import AlertDialog from 'src/common/components/AlertDialog';
import avatar2 from './avatar.png';
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

  useEffect(() => {
    getProfile();
    if (redirect.length > 0) {
      history.push(redirect);
    }
  }, [redirect]);

  // The AlertDialog context for each case where it will be called
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
  const deleteItem = (item, projectId = null) => {
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
  const handleAgreeAlertDialog = () => {
    switch (alertId) {
      case alertUserProfile.id: {
        setContext({ ...context, isOpen: false });
        return handleDeleteUserProfile();
      }
      case alertUserProject.id: {
        setContext({ ...context, isOpen: false });
        return handleDeleteProject(context.projectId);
      }
      default: return null;
    }
  };

  // Loop on buttons array to not repeat the button component
  const buttons = [
    {
      id: 1, method: () => deleteItem(alertUserProfile), label: 'Supprimer mon compte',
    },
    {
      id: 2, method: editProfile, label: 'Modifier mon compte',
    },
    {
      id: 3, method: newProject, label: 'Ajouter un projet',
    },
  ];

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
            onAgree={handleAgreeAlertDialog}
            onCancel={() => setContext({ ...context, isOpen: false })}
          />
          <h2 className={classes.subtitle}> Mon profil </h2>
          <div className={classes.column}>
            <div className={classes.rowCenter}>
              <Avatar alt="avatar" src={userProfile.userImage || avatar2} className={classes.large} />
              <h3 className={classes.username}>{userProfile.username}</h3>
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
                    handleDeleteProject={(id) => deleteItem(alertUserProject, id)}
                    isLogged={isLogged}
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
  isLogged: PropTypes.bool.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default UserProfile;
