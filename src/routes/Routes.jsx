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
import UpdateJobs from "../pages/HOME/postedJobs/UpdateJobs";
import PrivateRoute from "../pages/Shared/privateRoute/PrivateRoute";

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
          element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
        },
        {
          path: "/posted",
          element:<PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>,
          loader:()=> fetch('http://localhost:5000/jobs')
        },
        {
          path: "/update/:id",
          element:<UpdateJobs></UpdateJobs>,
          loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/bids",
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>,
        },
      ],
    },
  ]);

  export default router