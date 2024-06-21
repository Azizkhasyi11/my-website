import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../views/404";
import Projects from "../views/Projects";
import SocialLinks from "../views/SocialLinks";
import { Navigate } from "react-router-dom";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/socials",
    element: <SocialLinks />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
]);

export default Routes;
