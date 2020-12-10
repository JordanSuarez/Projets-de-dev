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
  getUserProfileRoute,
  getContactRoute,
  getHomeRoute,
  getRegisterRoute,
} from 'src/common/routing/routesResolver';
import { classes as classesProps } from 'src/common/classes';
import { bool, func, number } from 'prop-types';
import NavLink from './NavLink';

const Navigation = ({ classes, isLogged }) => {
  const history = useHistory();
  const [mainAnchorEl, setMainAnchorEl] = useState(null);
  const openMainMenu = Boolean(mainAnchorEl);

  // Close burger menu
  const handleClose = (state) => state(null);

  const routes = [
    {
      name: 'Accueil', route: getHomeRoute(),
    },
    {
      name: 'Tous les projets', route: getProjectsListRoute(1),
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

  // Routes
  const handleLogout = () => history.push(getLogoutRoute());
  const handleLogin = () => history.push(getLoginRoute());
  const handleHome = () => history.push(getAboutRoute());
  const handleRegister = () => history.push(getRegisterRoute());
  const handleProfilePage = () => history.push(getUserProfileRoute());

  return (
    <AppBar position="sticky" color="inherit" className={classes.navigation}>
      <Toolbar>
        <Grid container wrap="nowrap">
          <Hidden mdUp>
            <IconButton
              edge="start"
              aria-label="menu"
              aria-controls="menu-appbar-types"
              aria-haspopup="true"
              onClick={(event) => setMainAnchorEl(event.currentTarget)}
            >
              <MenuIcon fontSize="large" className={classes.burger} />
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
                <MenuItem key={name}>
                  <NavLink
                    label={name}
                    route={route}
                    activeClassName={classes.itemLinkActive}
                    className={classes.menuItem}
                  />
                </MenuItem>

              ))}
              <Hidden smUp>
                {isLogged
                  ? (
                    <MenuItem
                      onClick={handleProfilePage}
                      className={classes.menuItem}
                    >
                      Profil
                    </MenuItem>
                  )
                  : (
                    <MenuItem
                      onClick={handleLogin}
                      className={classes.menuItem}
                    >Connexion
                    </MenuItem>
                  )}
                {isLogged
                  ? (
                    <MenuItem
                      onClick={handleLogout}
                      className={classes.menuItem}
                    >
                      Se déconnecter
                    </MenuItem>
                  )
                  : (
                    <MenuItem
                      onClick={handleRegister}
                      className={classes.menuItem}
                    >
                      Inscription
                    </MenuItem>
                  )}
              </Hidden>
            </Menu>
          </Hidden>
          <Hidden smUp>
            <div className={classes.logoMobile} onClick={handleHome} />
          </Hidden>
          <Hidden smDown>
            <div className={classes.wrapper}>
              <div className={classes.logoDesktop} onClick={handleHome} />
              {routes.map(({
                name, route,
              }) => (
                <NavLink
                  key={name}
                  label={name}
                  route={route}
                  activeClassName={classes.itemLinkActive}
                  className={classes.itemLink}
                />
              ))}
            </div>
          </Hidden>
          <Hidden xsDown>
            <Grid container alignItems="center" justify="flex-end" spacing={2}>
              <Grid item>
                {isLogged
                  ? <Button onClick={handleProfilePage} label="Profil" variant="contained" className={classes.button}>Profil</Button>
                  : <Button onClick={handleLogin} label="Connexion" variant="contained" className={classes.button}>Connexion</Button>}
              </Grid>
              <Grid item>
                {isLogged
                  ? <Button onClick={handleLogout} label="Se déconnecter" variant="contained" className={classes.button}>Se déconnecter</Button>
                  : <Button onClick={handleRegister} label="Connexion" variant="contained" className={classes.button}>Inscription</Button>}
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Navigation.propTypes = {
  ...classesProps,
  isLogged: bool.isRequired,
};

export default Navigation;
