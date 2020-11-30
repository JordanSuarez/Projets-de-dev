import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  FavoriteBorderIcon,
} from '@material-ui/core';

import './cardProject.scss';

// image a supprimer lors de la dynamisation
import cardImage from './card-image.png';
import avatar from './avatar.png';

// eslint-disable-next-line no-empty-pattern
const CardProject = ({ }) => {
  console.log('je suis dans card');

  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card__image"
          image={cardImage}
          title="image website"
        />
        <CardContent className="card__text">
          <Typography className="card__text__title" gutterBottom variant="h5" component="h3">
            Super projet de site
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card__link">
        <FavoriteBorderIcon className="card__link__like" />
        <Avatar className="card__link__avatar" alt="Pikachu" src={avatar} />
      </CardActions>
    </Card>

  );
};

CardProject.propTypes = {

};

export default CardProject;
