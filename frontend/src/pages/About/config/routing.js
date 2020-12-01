import { ABOUT } from "src/common/routing/routesResolver";
import About from "../index";

export default {
  id: 'aboutPage',
  path: ABOUT,
  component: About,
  requireAuthentication: false,
}
