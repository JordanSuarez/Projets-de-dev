import React from 'react';

import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
} from '@material-ui/core';
import { classes as classesProps } from 'src/common/classes';
import { useHistory } from 'react-router-dom';
import { getProjectRoute, getProfileRoute } from 'src/common/routing/routesResolver';
// icone coeur border
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// icone coeur plein
import FavoriteIcon from '@material-ui/icons/Favorite';
import DOMPurify from 'dompurify';
import avatar from './avatar.png';

// eslint-disable-next-line arrow-body-style
const CardProject = ({
  projectId,
  classes,
  title,
  image,
  description,
  userImage,
  userId,
  tags,
}) => {
  const history = useHistory();

  const handleDisplayProject = (id) => {
    history.push(getProjectRoute(id));
  };
  const handleDisplayProfile = () => {
    history.push(getProfileRoute(userId));
  };

  const handleLikeProject = () => {
    // TODO like project and change to FavoriteIcon
  };

  const configSanitize = { ALLOWED_TAGS: ['em', 'strong', 'br', 'p'] };
  const cleanDescription = DOMPurify.sanitize(description, configSanitize);

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardActionArea}
        onClick={() => handleDisplayProject(projectId)}
      >
        <CardMedia
          className={classes.image}
          image={image}
          title="image website"
        />
        <CardContent className={classes.text}>
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
      </CardActionArea>
      <CardActions className={classes.link}>
        <FavoriteBorderIcon className={classes.like} onClick={handleLikeProject} />
        <Avatar className={classes.avatar} alt="Pikachu" src={userImage || avatar} onClick={handleDisplayProfile} />
      </CardActions>
    </Card>

  );
};

CardProject.propTypes = {
  ...classesProps,
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
};

CardProject.defaultProps = {
  userImage: avatar,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: null,
      name: '',
    }),
  ),
};

export default CardProject;
