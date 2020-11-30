import React, { useState } from 'react';

import {
  AppBar, Button, Grid, Hidden, IconButton, Menu, MenuItem, Toolbar,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {
  getLogoutRoute,
  getLoginRoute,
  getAboutRoute,
  getProjectsListRoute,
  getProfilesListRoute,
  getProfileRoute,
  getContactRoute,
  getCreationProjectRoute,
  getHomeRoute,
  getRegisterRoute,
} from 'src/common/routing/routesResolver';
import NavLink from './NavLink';
import './navigation.scss';
import { inherits } from 'util';

const Navigation = () => {
  const history = useHistory();
  const [userAnchorEl, setUserAnchorEl] = useState(null);
  const [mainAnchorEl, setMainAnchorEl] = useState(null);
  const [isLogged, setIsLogged] = useState(true);
  const openUserMenu = Boolean(userAnchorEl);
  const openMainMenu = Boolean(mainAnchorEl);

  const routes = [
    {
      name: 'Accueil', route: getHomeRoute(),
    },
    {
      name: 'Tous les projets', route: getProjectsListRoute(),
    },
    {
      name: 'Tous les profils', route: getProfilesListRoute(),
    },
    {
      name: 'Contact', route: getContactRoute(),
    },
    {
      name: 'About', route: getAboutRoute(),
    },
  ];

  function handleClose(state) {
    return state(null);
  }

  // Routes
  function handlePageDisplay(route) {
    return history.push(route);
  }

  function handleLogout() {
    return history.push(getLogoutRoute());
  }

  function handleLogin() {
    return history.push(getLoginRoute());
  }

  function handleRegister() {
    return history.push(getRegisterRoute());
  }

  function handleProfilePage() {
    return history.push(getProfileRoute(1));
  }

  function handleCreateProject() {
    return history.push(getCreationProjectRoute());
  }

  return (
    <div>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Grid container wrap="nowrap">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  aria-controls="menu-appbar-types"
                  aria-haspopup="true"
                  onClick={(event) => setMainAnchorEl(event.currentTarget)}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Menu
                  id="menu-appbar-types"
                  anchorEl={mainAnchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openMainMenu}
                  onClose={() => handleClose(setMainAnchorEl)}
                >
                  {routes.map(({ name, route }) => (
                    <MenuItem key={name} onClick={() => handlePageDisplay(route)}>
                      {name}
                    </MenuItem>
                  ))}
                  <Hidden smUp>
                    {isLogged
                      ? <MenuItem onClick={handleProfilePage}>Profil</MenuItem>
                      : <MenuItem onClick={handleLogin}>Connexion</MenuItem>}
                    {isLogged
                      ? <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
                      : <MenuItem onClick={handleRegister}>Inscription</MenuItem>}
                  </Hidden>
                </Menu>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <div className="navigation__logo" />
            </Hidden>
            <Hidden smDown>
              <div className="navigation__wrapper">
                {routes.map(({
                  name, route,
                }) => (
                  <NavLink
                    key={name}
                    label={name}
                    route={route}
                  />
                ))}
              </div>
            </Hidden>
            <Hidden xsDown>
              <Grid container alignItems="center" justify="flex-end" spacing={2}>
                <Grid item>
                  {isLogged
                    ? <Button onClick={handleProfilePage} label="Profil" variant="contained" className="navigation__button">Profil</Button>
                    : <Button onClick={handleLogin} label="Connexion" variant="contained" className="navigation__button">Connexion</Button>}
                </Grid>
                <Grid item>
                  {isLogged
                    ? <Button onClick={handleLogout} label="Se déconnecter" variant="contained" className="navigation__button">Se déconnecter</Button>
                    : <Button onClick={handleRegister} label="Connexion" variant="contained" className="navigation__button">Inscription</Button>}
                </Grid>
              </Grid>
            </Hidden>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
};

export default Navigation;
