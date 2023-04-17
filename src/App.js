//import Auth from "./components/Auth";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import { auth } from "./config/firebase-config";

function App() {
  const [uName, setUname] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUname(user.displayName);
      }
      //console.log(user);
    }, []);
  });

  return (
    <Fragment>
      {/*<Auth />*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home name={uName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
