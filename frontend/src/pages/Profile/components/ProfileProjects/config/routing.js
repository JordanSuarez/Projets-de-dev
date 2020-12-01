import { PROFILE_PROJECTS } from "src/common/routing/routesResolver";
import ProfileProjects from "../index";

export default {
  id: 'profileProjectPage',
  path: PROFILE_PROJECTS,
  component: ProfileProjects,
  requireAuthentication: false,
}
