import { PROJECT } from "src/common/routing/routesResolver";
import Project from "../index";

export default {
  id: 'ProjectPage',
  path: PROJECT,
  component: Project,
  requireAuthentication: false,
};
