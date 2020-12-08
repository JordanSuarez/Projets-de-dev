import { generatePath } from 'react-router-dom';

export const HOME = '/';
export const PROJECTS = '/projects/page=:offset';
export const PROJECT = '/projects/:id';
export const PROJECT_NEW = '/projects/new';
export const PROJECT_EDIT = '/projects/:id/edit';
export const PROFILES = '/profiles';
export const PROFILE = '/profiles/:id';
export const USER_PROFILE = '/my-profile';
export const PROFILE_EDIT = '/my-profile/edit';
export const PROFILE_FAVORITES = '/profiles/:id/favorites';
export const PROFILE_PROJECTS = '/profiles/:id/projects';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const REGISTER = '/register';
export const ABOUT = '/about';
export const CONTACT = '/contact';
export const LEGAL_MENTION = '/legal-mention';
export const ERROR = '/404';

export const getHomeRoute = () => generatePath(HOME);

export const getProjectsListRoute = (offset) => generatePath(PROJECTS, { offset });
export const getProjectRoute = (id) => generatePath(PROJECT, { id });
export const getCreationProjectRoute = () => generatePath(PROJECT_NEW);
export const getEditionProjectRoute = (id) => generatePath(PROJECT_EDIT, { id });

export const getProfilesListRoute = () => generatePath(PROFILES);
export const getProfileRoute = (id) => generatePath(PROFILE, { id });
export const getUserProfileRoute = () => generatePath(USER_PROFILE);
export const getEditionProfileRoute = () => generatePath(PROFILE_EDIT);
export const getProfileFavoritesRoute = (id) => generatePath(PROFILE_FAVORITES, { id });
export const getProfileProjectsRoute = (id) => generatePath(PROFILE_PROJECTS, { id });

export const getLoginRoute = () => generatePath(LOGIN);
export const getLogoutRoute = () => generatePath(LOGOUT);
export const getRegisterRoute = () => generatePath(REGISTER);

export const getAboutRoute = () => generatePath(ABOUT);
export const getContactRoute = () => generatePath(CONTACT);
export const getLegalMentionRoute = () => generatePath(LEGAL_MENTION);

export const getErrorRoute = () => generatePath(ERROR);
