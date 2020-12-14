import React from 'react';
import PropTypes, { bool } from 'prop-types';
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
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';
import { getProfileRoute } from 'src/common/routing/routesResolver';
import avatar2 from './avatar.png';

const CardAbout = ({
  classes,
  name,
  avatar,
  description,
  followLink,
  profileId,
  isLogged,
}) => {
  const history = useHistory();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.cardArea}>
        <Avatar alt="lePseudo" src={!isEmpty(avatar) ? avatar : avatar2} className={classes.large} />
        <CardContent className={classes.text}>
          <Typography className={classes.title} component="h3">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={isLogged ? classes.link : classes.linkLogout}>
        {isLogged && <GradeIcon className={classes.follow} />}
        <span
          className={classes.linkProfile}
          onClick={() => history.push(getProfileRoute(profileId))}
        >
          Voir son profil
        </span>
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
  profileId: PropTypes.string.isRequired,
  isLogged: bool.isRequired,
};

export default CardAbout;
