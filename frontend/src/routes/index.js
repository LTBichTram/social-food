import { HeaderOnly } from "~/layouts";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import config from "~/config";
import People from "~/pages/People";

const publicRoutes = [
  { path: config.routes.home, element: Home },
  { path: config.routes.profile, element: Profile },
  { path: config.routes.people, element: People },

  { path: config.routes.upload, element: Upload, layout: HeaderOnly },
  { path: config.routes.login, element: Login, layout: null },
];
export { publicRoutes };
