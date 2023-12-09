import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(null);

  const errorNotify = useCallback(() => {
    toast.error(authError);
  }, [authError]);
  const successNotify = () => toast.success("User created successfully.");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validatePassword = (password) => {
    // Minimum eight characters, at least one letter and one number:
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (password === "") {
      return toast.error("Please enter password.");
    } else if (regex.test(password)) {
      return "Password is Valid";
    } else {
      return toast.error("Password is not valid.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordValidationMessage = validatePassword(password);

    if (passwordValidationMessage !== "Password is Valid") {
      // Password is not valid, display the validation message
      return;
    }

    console.log("handle submit");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        {
          user && successNotify();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setAuthError(errorCode);
        errorNotify();
      });

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    errorNotify();
  }, [errorNotify]);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-2 text-xl text-center">Sign Up with E-mail</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          onChange={handleEmailChange}
          type="text"
          placeholder="Email"
          name="email"
          className="input input-bordered w-full max-w-xs mb-3"
          value={email}
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full max-w-xs mb-3"
          value={password}
        />
        <button className="btn btn-neutral mt-2" type="submit">
          Sign Up
        </button>
        <h2 className="mt-4">
          Have an account? <Link to={"/login"}>sign in</Link>{" "}
        </h2>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;
