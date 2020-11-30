import { LEGAL_MENTION } from "src/common/routing/routesResolver";
import LegalMention from "../index";

export default {
  id: 'legalMentionPage',
  path: LEGAL_MENTION,
  component: LegalMention,
  requireAuthentication: false,
}
