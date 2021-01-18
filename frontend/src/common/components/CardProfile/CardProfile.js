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
import { classes as classesProps } from 'src/common/classes';
import avatar2 from 'src/common/assets/images/avatar.png';

const CardProfile = ({
  classes,
  username,
  userImage,
  onClick,
  isLogged,
}) => (
  <Card className={classes.card}>
    <CardActionArea className={classes.cardArea} onClick={onClick}>
      <Avatar alt="avatar" src={userImage || avatar2} className={classes.large} />
      <CardContent className={classes.text}>
        <Typography className={classes.title} component="h3">
          {username}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={isLogged ? classes.link : classes.linkLogout}>
      {isLogged && <GradeIcon className={classes.follow} />}
      <span className={classes.linkProfile} onClick={onClick}>
        Voir son profil
      </span>
    </CardActions>
  </Card>
);

CardProfile.propTypes = {
  ...classesProps,
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

CardProfile.defaultProps = {
  userImage: avatar2,
};

export default CardProfile;
