import { HeaderOnly } from "~/layouts";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import routesConfig from "~/config/routes";

const publicRoutes = [
  { path: routesConfig.home, element: Home },
  { path: routesConfig.profile, element: Profile },
  { path: routesConfig.upload, element: Upload, layout: HeaderOnly },
  { path: routesConfig.login, element: Login, layout: null },
];
export { publicRoutes };
