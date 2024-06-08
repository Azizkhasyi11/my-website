import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../views/404";
import Projects from "../views/Projects";

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },{
    path: '/projects',
    element: <Projects />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default Routes;