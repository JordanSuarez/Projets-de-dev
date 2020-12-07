/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';
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

const CardProfile = ({
  classes,
  profile,
}) => {
  const history = useHistory();

  const showProfile = (id) => {
    history.push(getProfileRoute(id));
  };
  // TODO follow
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardArea}>
        {!profile.userImage && (
          <Avatar alt="avatar" src={avatar2} className={classes.large} />
        )}
        {profile.userImage && (
          <Avatar alt="avatar" src={profile.userImage} className={classes.large} />
        )}
        <CardContent className={classes.text}>
          <Typography className={classes.title} component="h3">
            {profile.username}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.link}>
        <GradeIcon className={classes.follow} />
        <span className={classes.linkProfile} onClick={() => showProfile(profile.id)}>
          Voir son profil
        </span>
      </CardActions>
    </Card>

  );
};

CardProfile.propTypes = {
  ...classesProps,
  profile: PropTypes.object.isRequired,
};

export default CardProfile;
