import homeRouting from 'src/pages/Home/config/routing';
import projectRouting from 'src/pages/Project/config/routing';
import creationProjectRouting from 'src/pages/Project/components/ProjectCreation/config/routing';
import editionProjectRouting from 'src/pages/Project/components/ProjectEdition/config/routing';
import projectsListRouting from 'src/pages/Projects/config/routing';
import profileRouting from 'src/pages/Profile/config/routing';
import editionProfileRouting from 'src/pages/Profile/components/ProfileEdition/config/routing';
import profileFavoritesRouting from 'src/pages/Profile/components/ProfileFavorites/config/routing';
import profileProjectsRouting from 'src/pages/Profile/components/ProfileProjects/config/routing';
import profilesListRouting from 'src/pages/Profiles/config/routing';
import loginRouting from 'src/pages/Login/config/routing';
import logoutRouting from 'src/pages/Logout/config/routing';
import registerRouting from 'src/pages/Register/config/routing';
import aboutRouting from 'src/pages/About/config/routing';
import contactRouting from 'src/pages/Contact/config/routing';
import legalMentionRouting from 'src/pages/LegalMention/config/routing';
import errorRouting from 'src/pages/404/config/routing';

// eslint-disable-next-line import/prefer-default-export
export const routes = [
  homeRouting,
  projectRouting,
  projectsListRouting,
  creationProjectRouting,
  editionProjectRouting,
  profileRouting,
  profilesListRouting,
  editionProfileRouting,
  profileFavoritesRouting,
  profileProjectsRouting,
  loginRouting,
  logoutRouting,
  registerRouting,
  aboutRouting,
  contactRouting,
  legalMentionRouting,
  errorRouting,
];
