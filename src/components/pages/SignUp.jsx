import classes from "./SignUp.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import InputControl from "../layouts/InputControl";
import { Fragment } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const submitHandler = async () => {
    if (!values.name || !values.email || !values.password) {
      setError("Fill all the fields");
      return;
    }

    setSubmitDisabled(true);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setSubmitDisabled(false);
      const user = res.user;
      updateProfile(user, { displayName: values.name });
      navigate("/");
      console.log(user);
    } catch (error) {
      setError(error.message);
      setSubmitDisabled(false);
    }
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.headingBox}>
          <h1 className={classes.heading}>Sign Up</h1>
          <InputControl
            label="Name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Enter your email address"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          <InputControl
            label="Password"
            placeholder="Enter your password"
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
              Sign Up
            </button>
            <p>
              Already have an Account?
              <span>
                <NavLink to="/login">Log In</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
