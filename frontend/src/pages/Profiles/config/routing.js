import { PROFILES } from "src/common/routing/routesResolver";
import Profiles from "../index";

export default {
  id: 'profilesPage',
  path: PROFILES,
  component: Profiles,
  requireAuthentication: false,
}
