import { LOGIN } from "src/common/routing/routesResolver";
import Login from "../index";

export default {
  id: 'loginPage',
  path: LOGIN,
  component: Login,
  requireAuthentication: false,
}
