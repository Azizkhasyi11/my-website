import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../layouts/HomeLayout";
import NotFound from "../views/404";

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
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default Routes;