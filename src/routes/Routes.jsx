import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HOME/home/Home";
import ErrorPage from "../errorPage/ErrorPage";

import Register from "../pages/Shared/register/Register";
import LogIn from "../pages/Shared/login/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
      ],
    },
  ]);

  export default router