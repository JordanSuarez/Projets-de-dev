import { CONTACT } from "src/common/routing/routesResolver";
import Contact from "../index";

export default {
  id: 'contactPage',
  path: CONTACT,
  component: Contact,
  requireAuthentication: false,
};
