/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseContext } from "../context/FirebaseContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, googleSignIn } = useContext(FirebaseContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User logged in successfully.");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.code);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto flex justify-center">
      <form
        onSubmit={handleSignUp}
        className="flex justify-center flex-col items-center"
      >
        <h1 className="mt-8 mb-5 text-center text-2xl">
          Login with Email and password.
        </h1>
        <input
          onChange={handleEmail}
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <input
          onChange={handlePassword}
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs mb-5"
        />
        <button type="submit" className="btn btn-neutral">
          Login
        </button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-neutral mt-10"
        >
          Login with Google
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
