import { mergeClasses } from '@material-ui/styles';
import React from 'react';

import Base from 'src/common/components/Base';
import { classes as classesProps } from 'src/common/classes';
import notFound from 'src/common/assets/images/404.png';
import { useHistory } from 'react-router-dom';
import { getHomeRoute } from 'src/common/routing/routesResolver';

const NotFound = ({ classes }) => {
  const history = useHistory();
  return (
    <Base>
      <div className={classes.container}>
        <img className={classes.image} src={notFound} alt="404" onClick={() => history.push(getHomeRoute())} />
      </div>
    </Base>
  );
};

NotFound.propTypes = {
  ...classesProps,
};

export default NotFound;
