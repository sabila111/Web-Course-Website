import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HOME/home/Home";
import ErrorPage from "../errorPage/ErrorPage";
import LogIn from "../pages/Shared/login/LogIn";
import Register from "../pages/Shared/register/Register";

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