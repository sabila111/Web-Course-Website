import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/HOME/home/Home";
import ErrorPage from "../errorPage/ErrorPage";

import Register from "../pages/Shared/register/Register";
import LogIn from "../pages/Shared/login/LogIn";
import AddJobs from "../pages/HOME/AddJobs/AddJobs";
import PostedJobs from "../pages/HOME/postedJobs/PostedJobs";
import Footer from "../pages/Shared/footer/Footer";
import MyBids from "../pages/HOME/bids/MyBids";

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
        {
          path: "/footer",
          element:<Footer></Footer>,
        },
        {
          path: "/add",
          element:<AddJobs></AddJobs>,
        },
        {
          path: "/posted",
          element:<PostedJobs></PostedJobs>,
          loader:()=> fetch('http://localhost:5000/jobs')
        },
        {
          path: "/bids",
          element:<MyBids></MyBids>,
        },
      ],
    },
  ]);

  export default router