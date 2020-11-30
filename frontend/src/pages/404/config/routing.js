import { ERROR } from "src/common/routing/routesResolver";
import Error from "../index";

export default {
  id: 'errorPage',
  path: ERROR,
  component: Error,
  requireAuthentication: false,
}
