import { LOGOUT } from "src/common/routing/routesResolver";
import Logout from "../index";

export default {
  id: 'logoutPage',
  path: LOGOUT,
  component: Logout,
  requireAuthentication: true,
}
