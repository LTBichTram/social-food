import HeaderOnly from "../components/Layout/HeaderOnly";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";

const publicRoutes = [
  { path: "/", element: Home },
  { path: "/profile", element: Profile },
  { path: "/upload", element: Upload, layout: HeaderOnly },
  { path: "/login", element: Login, layout: null },
];
export { publicRoutes };
