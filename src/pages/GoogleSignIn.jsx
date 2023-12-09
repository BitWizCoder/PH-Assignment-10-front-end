import { useContext } from "react";
import { FirebaseContext } from "../context/FirebaseContext";

const GoogleSignIn = () => {
  const { googleSignIn } = useContext(FirebaseContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={handleGoogleSignIn} className="btn btn-neutral">
        Login
      </button>
    </div>
  );
};

export default GoogleSignIn;
