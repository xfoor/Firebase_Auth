import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Post from "./Post";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <nav>
        <Link to={"/"}>Home</Link>
        {!isAuth ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <>
            <Link to={"/createpost"}>Post</Link>
            <button onClick={signUserOut} className="sign-out">
              Sign Out
            </button>
          </>
        )}
      </nav>
      <header>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createpost" element={<Post isAuth={isAuth} />} />
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />}
          />
        </Routes>
      </header>
    </Router>
  );
};

export default App;
