import { FirebaseContext } from "../context/FirebaseContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(FirebaseContext);
  const location = useLocation();

  if (loading) {
    // Show a loading spinner while authentication status is being determined
    return (
      <div role="status">
        {/* Your loading spinner JSX */}
      </div>
    );
  } else if (!user) {
    // Redirect to the login page if not authenticated
    return <Navigate state={location.pathname} to="/login" replace />;
  } else {
    // Allow access to the protected route
    return children;
  }
};

export default PrivateRoute;
