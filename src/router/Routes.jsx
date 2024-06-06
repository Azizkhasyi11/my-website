import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import HomeLayout from "../layouts/HomeLayout";

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
    
  }
])

export default Routes;