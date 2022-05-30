import { React, useState } from "react";
import { Link } from "react-router-dom";
import Backcircle from "../Backcircles/Backcircle";
import "./login.css";

const Login = () => {
  const [loginentry, setEntry] = useState("");

  function Teacher() {
    let name = document.querySelector(".teacher");
    if (loginentry == "teacher") {
    } else {
      name.style.color = "rgba(94, 93, 186, 1)";
      document.querySelector(".school").style.color = "rgb(208, 208, 209)";
      document.querySelector(".parent").style.color = "rgb(208, 208, 209)";
    }
  }
  function School() {
    let name = document.querySelector(".school");
    if (loginentry == "school") {
    } else {
      name.style.color = "rgba(94, 93, 186, 1)";
      document.querySelector(".teacher").style.color = "rgb(208, 208, 209)";
      document.querySelector(".parent").style.color = "rgb(208, 208, 209)";
    }
  }
 
  function Parent() {
    let name = document.querySelector(".parent");
    if (loginentry == "parent") {
    } else {
      name.style.color = "rgba(94, 93, 186, 1)";
      document.querySelector(".school").style.color = "rgb(208, 208, 209)";
      document.querySelector(".teacher").style.color = "rgb(208, 208, 209)";
    }
  }

  return (
    <>
      <Backcircle bg="black" />
      <div className="loginform">
        <form>
          <h3>Login</h3>
          <div className="select">
            <div
              className="teacher"
              onClick={() => {
                setEntry("teacher");
                Teacher();
              }}
            >
              Teachers
            </div>
            <div
              className="school"
              onClick={() => {
                setEntry("school");
                School();
              }}
            >
              Schools
            </div>
            <div
              className="parent"
              onClick={() => {
                setEntry("parent");
                Parent();
              }}
            >
              Parents
            </div>
          </div>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <div>
            <p><Link to='/forgot'>Forgot Password</Link></p>
            <Link to='/test'><button type="submit">Login</button></Link>
          </div>
          <p className="dont">
            Don't have an account?{" "}
            <span>
              <Link to="/">Signup</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
