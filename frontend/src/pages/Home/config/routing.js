import { HOME } from "src/common/routing/routesResolver";
import Home from "../index";

export default {
  id: 'homePage',
  path: HOME,
  component: Home,
  requireAuthentication: false,
}
