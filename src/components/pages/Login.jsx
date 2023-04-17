import React, { Fragment } from "react";
import classes from "./Login.module.css";
import InputControl from "../layouts/InputControl";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const submitHandler = async () => {
    if (!values.email || !values.password) {
      setError("Fill all the fields");
      return;
    }

    setSubmitDisabled(true);

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setSubmitDisabled(false);
      const user = res.user;
      console.log(user);
      navigate("/");
    } catch (error) {
      setError(error.message);
      setSubmitDisabled(false);
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.headingBox}>
          <h1 className={classes.heading}>login</h1>
          <InputControl
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />

          <div className={classes.footer}>
            <b className={classes.error}>{error}</b>
            <button onClick={submitHandler} disabled={submitDisabled}>
              Login
            </button>
            <p>
              Don't have an account?
              <span>
                <NavLink to="/signup">Sign Up</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
