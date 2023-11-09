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

import PrivateRoute from "../pages/Shared/privateRoute/PrivateRoute";
import HomeTabs from "../pages/HOME/home/HomeTabs";
import JobDetail from "../pages/HOME/home/jobDetail/JobDetail";
import Update2 from "../pages/HOME/postedJobs/Update2";

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
          path: "/homeTabs/:category",
          element:<HomeTabs></HomeTabs>,
          loader:({params})=> fetch(`http://localhost:5000/jobs/${params.category}}`)
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
        // {
        //   path: "/update/:id",
        //   element:<UpdateJobs></UpdateJobs>,
        //   loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        // },
        {
          path: "/update2/:id",
          element:<Update2></Update2>,
          loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/jobDetail/:id",
          element:<JobDetail></JobDetail>,
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