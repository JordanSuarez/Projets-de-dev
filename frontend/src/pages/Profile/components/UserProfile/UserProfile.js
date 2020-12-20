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
  getMyLikes,
  myLikes,
  getProjects,
  projects,
  clearState,
}) => {
  const history = useHistory();
  const [toggleWindow, setToggleWindow] = useState(false);

  useEffect(() => {
    clearState();
    getProfile();
    getProjects();
    getMyLikes();
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
      handleDeleteProject={(id) => deleteItem(alertUserProject, id)}
      isLogged={isLogged}
      like={false}
    />
  ));

  // eslint-disable-next-line max-len
  const likedProjects = projects.filter((o1) => myLikes.some((o2) => (o1.id === o2.projectId) && (o2.isLike === 1))).map((project) => {
    let like = false;
    myLikes.map((myLike) => {
      if ((project.id === myLike.projectId) && (myLike.isLike === 1)) {
        like = true;
      }
    });
    return (
      <CardProject
        key={project.id}
        projectId={project.id}
        title={project.title}
        tags={project.tags}
        description={project.description}
        userId={project.user.id}
        userImage={project.user.userImage}
        image={project.image}
        isLogged={isLogged}
        vote={project.vote}
        like={like}
      />
    );
  });

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
              <h2 className={classes.subtitle} onClick={() => setToggleWindow(!toggleWindow)}>
                Mes projets
              </h2>
              <h2 className={classes.subtitle} onClick={() => setToggleWindow(!toggleWindow)}>
                Mes projets préférés
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
          {toggleWindow && (
          <div>
            <div className={classes.cardContainer}>
              {isEmpty(likedProjects) && (
              <p>Je n'ai pas encore de projets préférés</p>
              )}
              {!isEmpty(likedProjects)
                && <Carousel items={likedProjects} />}
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
  getMyLikes: PropTypes.func.isRequired,
  myLikes: PropTypes.array,
  getProjects: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  projects: PropTypes.array,
};

UserProfile.defaultProps = {
  myLikes: [],
  projects: [],
};
export default UserProfile;
