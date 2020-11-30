import { PROJECT_NEW } from "src/common/routing/routesResolver";
import ProfileCreation from "../index";

export default {
  id: 'profileCreationPage',
  path: PROJECT_NEW,
  component: ProfileCreation,
  requireAuthentication: true,
}
