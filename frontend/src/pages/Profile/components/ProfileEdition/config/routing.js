import { PROFILE_EDIT } from "src/common/routing/routesResolver";
import ProfileEdition from "../index";

export default {
  id: 'profileEditionPage',
  path: PROFILE_EDIT,
  component: ProfileEdition,
  requireAuthentication: true,
}
