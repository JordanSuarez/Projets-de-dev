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
import { getProjectRoute } from 'src/common/routing/routesResolver';

// icone coeur border
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// icone coeur plein

import FavoriteIcon from '@material-ui/icons/Favorite';
// import './cardProject.scss';
// import { mergeClasses } from '@material-ui/styles';


// eslint-disable-next-line arrow-body-style
const CardProject = ({
  id,
  classes,
  title,
  image,
  description,
  user,
}) => {
  const history = useHistory();
  const handleDisplayProject = (id) => {
    history.push(getProjectRoute(id));
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleDisplayProject(id)}>
        <CardMedia
          className={classes.image}
          image={image}
          title="image website"
        />
        <CardContent className={classes.text}>
          <Typography className={classes.title} component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.link}>
        <FavoriteBorderIcon className={classes.like} />
        <Avatar className="card__link__avatar" alt="Pikachu" src={user.userImage} />
      </CardActions>
    </Card>

  );
};

CardProject.propTypes = {
  ...classesProps,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

export default CardProject;
