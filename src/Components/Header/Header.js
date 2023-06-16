import React, { useContext } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("accessToken");
      })
      .catch(() => {});
  };
  return (
    <div className="w-9/12 mx-auto">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="h-10" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto flex gap-5">
            {user?.uid ? (
              <>
                <Link
                  to="/"
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Dashboard
                </Link>
                <Link
                  onClick={handleLogout}
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-decoration-none text-xl font-normal text-black"
                >
                  Signup
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
