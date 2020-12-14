import { NOT_FOUND } from "src/common/routing/routesResolver";
import NotFound from "../index";

export default {
  id: 'notFoundPage',
  path: NOT_FOUND,
  component: NotFound,
  requireAuthentication: false,
}
