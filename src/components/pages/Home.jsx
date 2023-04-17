import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

const Home = (props) => {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div>
        <h1 className="">
          <NavLink to="/login">Login</NavLink>
        </h1>
        <br />
        <br />
        <br />
        <h1 className="">
          <NavLink to="/signup">SignUp</NavLink>
        </h1>
        <br />
        <br />
        <br />
        <h3
          className=""
          style={{
            fontSize: "2.4rem",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          {props.name ? `welcome ${props.name}` : "Login Please"}
        </h3>

        <button onClick={logOut}>Log Out</button>
      </div>
    </Fragment>
  );
};

export default Home;
