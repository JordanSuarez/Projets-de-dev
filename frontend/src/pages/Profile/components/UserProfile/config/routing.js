import { USER_PROFILE } from "src/common/routing/routesResolver";
import UserProfile from "../index";

export default {
  id: 'userProfilePage',
  path: USER_PROFILE,
  component: UserProfile,
  requireAuthentication: true,
}
