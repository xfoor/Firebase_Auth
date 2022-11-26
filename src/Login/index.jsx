import React from "react";
import { auth, googleProvider, gitHubProvider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Login = ({ setIsAuth, isAuth }) => {
  const navigate = useNavigate();

  const signInWidthGoogle = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  const signInWidthGitHub = () => {
    signInWithPopup(auth, gitHubProvider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="login">
      <button onClick={signInWidthGoogle}>
        <FcGoogle /> Sign In With Google
      </button>
      <button onClick={signInWidthGitHub}>
        <AiFillGithub /> Sign In With GitHub
      </button>
    </div>
  );
};

export default Login;
