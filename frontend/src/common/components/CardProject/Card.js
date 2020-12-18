/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import { useHistory } from 'react-router-dom';
import { getProjectRoute, getProfileRoute, getEditionProjectRoute } from 'src/common/routing/routesResolver';
// icone coeur border
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// icone coeur plein
import FavoriteIcon from '@material-ui/icons/Favorite';
import DOMPurify from 'dompurify';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from 'src/common/components/IconButton';
import avatar from './avatar.png';

const CardProject = ({
  projectId,
  classes,
  title,
  image,
  description,
  userImage,
  userId,
  tags,
  projectOwnerOptions,
  handleDeleteProject,
  isLogged,
  like,
  setLike,
  setDislike,
  vote,
}) => {
  const history = useHistory();
  const [isLike, setIsLike] = useState(like);
  const [voteCount, setVoteCount] = useState(vote);
  const handleDisplayProject = () => {
    history.push(getProjectRoute(projectId));
  };

  const handleDisplayProjectEdit = () => {
    history.push(getEditionProjectRoute(projectId));
  };

  const handleDisplayProfile = () => {
    history.push(getProfileRoute(userId));
  };

  const handleLikeProject = (id) => {
    setLike(id);
    setIsLike(true);
    setVoteCount(voteCount + 1);
  };
  const handleDislikeProject = (id) => {
    setDislike(id);
    setIsLike(false);
    setVoteCount(voteCount - 1);
  };

  const configSanitize = { ALLOWED_TAGS: ['em', 'strong', 'br', 'p'] };
  const cleanDescription = DOMPurify.sanitize(description, configSanitize);

  return (
    <Card className={classes.card}>
      <div>
        <CardMedia
          onClick={handleDisplayProject}
          className={classes.image}
          image={image}
          title="image website"
        />
      </div>
      <div className={classes.contentCard}>
        <CardContent className={classes.text} onClick={handleDisplayProject}>
          <Typography className={classes.title} component="h3">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="div" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
          <Typography className={classes.tags} variant="body2" color="textSecondary" component="p">
            {tags.map((tag) => {
              if (tag !== null) {
                return (
                  <span key={tag.id} className={classes.tag}>{tag.name}</span>
                );
              }
            })}
          </Typography>
        </CardContent>
        <div className={classes.test}>
          <CardActions className={isLogged ? classes.link : classes.linkLogout}>
            {!projectOwnerOptions ? (
              <>
                {isLogged
                  && isLike
                  && <FavoriteIcon className={classes.like} onClick={() => handleDislikeProject(projectId)} />}
                {isLogged
                  && !isLike
                  && <FavoriteBorderIcon className={classes.dontLike} onClick={() => handleLikeProject(projectId)} />}

                {voteCount !== null ? <span className={classes.vote}>{voteCount} vote</span> : <span className={classes.vote}>0 vote</span>}

                <Avatar className={classes.avatar} alt="Pikachu" src={userImage || avatar} onClick={handleDisplayProfile} />
              </>
            ) : (
              <>
                <IconButton title="Supprimer" onClick={() => handleDeleteProject(projectId)} className={classes.deleteIcon}>
                  <DeleteIcon />
                </IconButton>
                <IconButton title="Modifier" onClick={() => handleDisplayProjectEdit(projectId)} className={classes.editIcon}>
                  <EditIcon />
                </IconButton>
              </>
            )}
          </CardActions>
        </div>
      </div>
    </Card>

  );
};

CardProject.propTypes = {
  ...classesProps,
  handleDeleteProject: PropTypes.func,
  projectOwnerOptions: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
  projectId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  userId: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  setLike: PropTypes.func.isRequired,
  setDislike: PropTypes.func.isRequired,
  like: PropTypes.bool,
  vote: PropTypes.number,
};

CardProject.defaultProps = {
  userImage: avatar,
  handleDeleteProject: Function.prototype,
  projectOwnerOptions: false,
  vote: 0,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: null,
      name: '',
    }),
  ),
  like: null,
};

export default CardProject;
