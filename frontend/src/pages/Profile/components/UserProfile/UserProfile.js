import React from 'react';
import { getEditionProfileRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';
import { classes as classesProps } from 'src/common/classes';
import {
  Box,
  Button,
} from '@material-ui/core';
import Base from 'src/common/components/Base';

// eslint-disable-next-line arrow-body-style
const UserProfile = ({classes}) => {
  const history = useHistory();
  const handleClick = () => history.push(getEditionProfileRoute());
  return (
    <Base>
      <div> Profile </div>
      <Button
        className={classes.edit}
        variant="contained"
        type="button"
        onClick={handleClick}
      >
        Editer
      </Button>
    </Base>
  );
};

UserProfile.propTypes = {
  ...classesProps,
};

export default UserProfile;
