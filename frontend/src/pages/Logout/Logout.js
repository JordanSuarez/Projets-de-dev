import { func, string } from 'prop-types';
import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

const Logout = ({ handleLogout, redirect }) => {
  const history = useHistory();

  useEffect(() => {
    handleLogout();
    history.push(redirect);
  }, [redirect]);

  return null;
};

Logout.propTypes = {
  handleLogout: func.isRequired,
  redirect: string.isRequired,
};

export default Logout;
