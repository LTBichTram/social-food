import { HeaderOnly } from "~/layouts";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import config from "~/config";
import Stores from "~/pages/Stores";
import Discover from "~/pages/Discover";
import Mylove from "~/pages/Mylove";

const publicRoutes = [
  { path: config.routes.home, element: Home },
  { path: config.routes.profile, element: Profile },
  { path: config.routes.upload, element: Upload, layout: HeaderOnly },
  { path: config.routes.login, element: Login, layout: null },
  { path: config.routes.stores, element: Stores },
  { path: config.routes.discover, element: Discover },
  { path: config.routes.mylove, element: Mylove },
];
export { publicRoutes };
