import { REGISTER } from "src/common/routing/routesResolver";
import Register from "../index";

export default {
  id: 'registerPage',
  path: REGISTER,
  component: Register,
  requireAuthentication: false,
}
