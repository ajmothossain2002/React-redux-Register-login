import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { register  } from "../../redux/authSlice";

export default function Registration() {
  const {redirectContact} = useSelector((state) => state.contents);
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState({});
  const [img, setImg] = useState("");
  
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  
 
  const validation = () => {
    let error = {};
    if (!user.name) {
      error.name = "enter your name please";
    }
    if (!user.email) {
      error.email = "email is required";
    }
    if (!user.password) {
      error.password = "password is required";
    }
    if (!user.mobile) {
      error.mobile = "enter a valid mobile number";
    }
    return error;
  };
  console.log(error);

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "name") {
      if (value.length === 0) {
        setUser({ ...user, name: "" });
        setError({ ...error, name: "please enter your name" });
      } else {
        setUser({ ...user, name: value });
        setError({ ...error, name: "" });
      }
    }

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
    if (name === "mobile") {
      if (value.length === 0) {
        setUser({ ...user, mobile: "" });
        setError({ ...error, mobile: "please enter a valid mobile number" });
      } else {
        setUser({ ...user, mobile: value });
        setError({ ...error, mobile: "" });
      }
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("name", user.name);
    formData.append("image", img);
    formData.append("email", user.email);
    formData.append("mobile", user.mobile);
    formData.append("password", user.password);
    dispatch(register(formData));
    
    //navigate("/login");
    //console.log(user);
  };

  
  const RedirectUser = () => {
    let name = localStorage.getItem("name");
    let isInContactPage = window.location.pathname.toLowerCase() === "/register";

    if (name !== null && name !== undefined && name !== "") {
      // window.location.pathname = getPathname;
      isInContactPage && navigate("/login");
    }
  };

  useEffect(() => {
    RedirectUser();
  }, [redirectContact]);
  
  return (
    <>
      <div className="container">
        <h2>Contact Form</h2>
        <form action="">
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {error?.name}
            </span>
          </div>
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
            <label for="password">Password:</label>
            <input
              type="password"
              className="form-control"
              
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <span style={{ color: "red", marginLeft: "24px" }}>
              {error?.password}
            </span>
          </div>
          <div>
            <div className="form-group">
              <label for="mobile">Mobile No:</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={user.mobile}
                onChange={(e) => postUserData(e)}
              />
              <span style={{ color: "red", marginLeft: "24px" }}>
                {error?.mobile}
              </span>
            </div>
            <div>
              <label>Image</label>
              <input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                name="img"
                accept="image/*"
              />
              {/* <span style={{ color: "red", marginLeft: "24px" }}>
                
                {error?.img}
              </span> */}
            </div>
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
          </div>
         <button type="submit" className="btn btn-primary" onClick={Submit}>
            Submit
          </button>
        </form>

        
      </div>
    </>
  );
}
