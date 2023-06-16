import AddService from "../Dashboard/AddService";
import Book from "../Dashboard/Book";
import BookingList from "../Dashboard/BookingList";
import Dashboard from "../Dashboard/Dashboard";
import MakeAdmin from "../Dashboard/MakeAdmin";
import ManageService from "../Dashboard/ManageService";
import OrderList from "../Dashboard/OrderList";
import Review from "../Dashboard/Review";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addservice",
        element: (
          <AdminRoute>
            <AddService></AddService>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageservice",
        element: (
          <AdminRoute>
            <ManageService></ManageService>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/orderlist",
        element: (
          <PrivateRoute>
            <OrderList></OrderList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/makeadmin",
        element: (
          <PrivateRoute>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/book",
        element: (
          <PrivateRoute>
            <Book></Book>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/bookinglist",
        element: (
          <PrivateRoute>
            <BookingList></BookingList>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
