import { PROJECT_NEW } from "src/common/routing/routesResolver";
import ProjectCreation from "../index";

export default {
  id: 'projectCreationPage',
  path: PROJECT_NEW,
  component: ProjectCreation,
  requireAuthentication: true,
}
