import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { string } from 'prop-types';

const NavLink = ({
  label, route, activeClassName, className,
}) => (
  <Link exact to={route} activeClassName={activeClassName} className={className}>{label}</Link>
);

NavLink.propTypes = {
  route: string.isRequired,
  label: string.isRequired,
  activeClassName: string.isRequired,
  className: string.isRequired,
};

export default NavLink;
