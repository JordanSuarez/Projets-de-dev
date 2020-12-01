import { PROJECTS } from "src/common/routing/routesResolver";
import Projects from "../index";

export default {
  id: 'projectsPage',
  path: PROJECTS,
  component: Projects,
  requireAuthentication: false,
}
