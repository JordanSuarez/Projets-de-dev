import { PROFILE_FAVORITES } from "src/common/routing/routesResolver";
import ProfileFavorites from "../index";

export default {
  id: 'profileFavoritesPage',
  path: PROFILE_FAVORITES,
  component: ProfileFavorites,
  requireAuthentication: false,
}
