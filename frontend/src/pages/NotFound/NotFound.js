import React from 'react';

import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import notFound from 'src/common/assets/images/404.png';
import { useHistory } from 'react-router-dom';
import { getHomeRoute } from 'src/common/routing/routesResolver';
import { Button } from '@material-ui/core';

const NotFound = ({ classes }) => {
  const history = useHistory();
  return (
    <Base>
      <div className={classes.container}>
        <p className={classes.text}>La page que vous recherchez n'existe pas</p>
        <Button
          className={classes.backToHome}
          variant="outlined"
          type="button"
          onClick={() => history.push(getHomeRoute())}
        >
          Retour à l'accueil
        </Button>
        <img className={classes.image} src={notFound} alt="404" onClick={() => history.push(getHomeRoute())} />
      </div>
    </Base>
  );
};

NotFound.propTypes = {
  ...classesProps,
};

export default NotFound;
