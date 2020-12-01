import { PROJECT_EDIT } from "src/common/routing/routesResolver";
import ProjectEdition from "../index";

export default {
  id: 'projectEditionPage',
  path: PROJECT_EDIT,
  component: ProjectEdition,
  requireAuthentication: true,
}
