import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleLoggedout, handleredirectContact } from "../../redux/authSlice";
import "./HeaderStyle.css";

export default function HeaderBlock() {
  const { isloggedIn } = useSelector((state) => state?.contents);
  const [is_loggedIn, setis_loggedIn] = useState("");

  const [have_email, sethave_email] = useState("");
  const navigate = useNavigate();
  //const token = localStorage.getItem("token");
  const Name = localStorage.getItem("Name");

  const Email = localStorage.getItem("Email");

  const dispatch = useDispatch();
  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);

  useEffect(() => {
    sethave_email(Email);
  }, [Email]);

  const logout = () => {
    dispatch(handleLoggedout());
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="">
              {isloggedIn ? (
                <>
                  <li className="logout" style={{ cursor: "pointer" }}>
                    {is_loggedIn}
                  </li>
                </>
              ) : (
                <Link to="/login">
                  <i class="fa fa-user-o" aria-hidden="true"></i>{" "}
                </Link>
              )}
            </li>
            <li className="">
              {isloggedIn ? (
                <>
                  <li className="logout" style={{ cursor: "pointer" }}>
                    {have_email}
                  </li>
                </>
              ) : (
                <Link to="/login">
                  <i class="fa fa-user-o" aria-hidden="true"></i>{" "}
                </Link>
              )}
            </li>
            <li className="_active ">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="">
              <a
                target="_blank"
                href="https://www.amazon.in/?tag=msndeskabkin-21&hvadid=72155527817002&hvqmt=e&hvbmt=be&hvdev=c&ref=pd_sl_4jqua56skg_e"
              >
                Shop
              </a>
            </li>
            <li className="">
              <NavLink to="/CreateStudent">Add Student</NavLink>
            </li>
            <li className="">
              <NavLink to="/allstudent">Student Details</NavLink>
            </li>
            <li className="">
              {isloggedIn ? (
                <>
                  <li
                    className="logout"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      logout();
                      dispatch(handleredirectContact());
                    }}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <Link to="/login">
                  <i class="fa fa-user-o" aria-hidden="true"></i> Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
