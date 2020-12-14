/* eslint-disable quotes */
// eslint-disable-next-line import/no-unresolved
import { PROFILE } from "src/common/routing/routesResolver";
import Profile from "../index";

export default {
  id: 'profilePage',
  path: PROFILE,
  component: Profile,
  requireAuthentication: false,
}
