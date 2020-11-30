import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { string } from 'prop-types';

const NavLink = ({ label, route }) => (
  <Link exact to={route} activeClassName="navigation__item-link--active" className="navigation__item-link">{label}</Link>
);

NavLink.propTypes = {
  route: string.isRequired,
  label: string.isRequired,
};

export default NavLink;
