/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
// import { mergeClasses } from '@material-ui/styles';
import { classes as classesProps } from 'src/common/classes';

import avatar2 from './avatar.png';

const CardAbout = ({
  classes,
  name,
  avatar,
  description,
  followLink,
  profileLink,
}) => {
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardArea}>
        <Avatar alt="lePseudo" src={avatar2} className={classes.large} />
        <CardContent className={classes.text}>
          <Typography className={classes.title} component="h3">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.link}>
        <GradeIcon className={classes.follow} />
        <span className={classes.linkProfile}>Voir son profil</span>
      </CardActions>
    </Card>

  );
};

CardAbout.propTypes = {
  ...classesProps,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  followLink: PropTypes.string.isRequired,
  profileLink: PropTypes.string.isRequired,
};

export default CardAbout;
