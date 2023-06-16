import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../CustomHook/useAdmin";
import Header from "../Header/Header";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="w-9/12 mx-auto my-10">
        <div className="flex gap-10">
          <div>
            {isAdmin ? (
              <>
                <Link
                  to="addservice"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Add Service
                </Link>
                <br />
                <Link
                  to="orderlist"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Order List
                </Link>
                <br />
                <Link
                  to="manageservice"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Make Admin
                </Link>
                <br />
              </>
            ) : (
              <>
                <Link
                  to="makeadmin"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Request For Admin
                </Link>
                <br />

                <Link
                  to="book"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Book
                </Link>
                <br />
                <Link
                  to="bookinglist"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Booking List
                </Link>
                <br />
                <Link
                  to="review"
                  className="text-decoration-none text-3xl font-bold  text-black "
                >
                  Review
                </Link>
                <br />
              </>
            )}
          </div>
          <div className="flex-1 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
