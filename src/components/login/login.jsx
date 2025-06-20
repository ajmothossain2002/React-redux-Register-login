import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn, reset_redirectContact } from "../../redux/authSlice";


export default function LogIn() {
  const navigate = useNavigate();
  const { redirectTo, redirectContact, isinRegistration } = useSelector(
    (s) => s.contents
  );
  const [myName, setmyName] = useState("");

  const myname = localStorage.getItem("name");

  useEffect(() => {
    setmyName(myname);
  }, [myname]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  
  const dispatch = useDispatch();

  const validation = () => {
    let error = {};

    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }

    return error;
  };
  console.log(error);
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "please put your email address" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password is Required" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let data = {
      email: user.email,
      password: user.password,
    };
    
    dispatch(logIn(data));
  };

  
  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token !== null && token !== undefined && token !== "") {
      // window.location.pathname = getPathname;
      isInLoginPage && navigate("/");
    }
  };

  

  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);

  useEffect(() => {
    dispatch(reset_redirectContact(null));
  }, [redirectContact]);

  return (
    <>
      <div className="container">
        <h2>LogIn Form</h2>
        <form action="">
          <div className="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {error?.email}
            </span>
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {error?.password}
            </span>
          </div>

          <button type="submit" className="btn btn-primary" onClick={Submit}>
            Submit
          </button>
          <br />
        </form>

       
        <ul className="registered_user">
          <li>
            {isinRegistration ? (
              <>
                <li className="registered_name text-center">
                  {myName} - you have registered successfully.Now use the
                  credentials for logging in
                </li>
              </>
            ) : (
              <>
                <Link to="/register">Go for registration</Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
 