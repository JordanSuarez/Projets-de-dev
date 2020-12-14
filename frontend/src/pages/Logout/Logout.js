import { useEffect } from 'react';

import { func } from 'prop-types';
import { getHomeRoute } from 'src/common/routing/routesResolver';
import { useHistory } from 'react-router-dom';

const Logout = ({ handleLogout }) => {
  const history = useHistory();

  useEffect(() => {
    handleLogout();
    history.push(getHomeRoute());
  }, []);

  return null;
};

Logout.propTypes = {
  handleLogout: func.isRequired,
};

export default Logout;
