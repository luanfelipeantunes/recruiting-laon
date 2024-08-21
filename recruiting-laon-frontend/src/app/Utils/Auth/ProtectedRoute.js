import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }


    if (!isAuthenticated) {
        return <Navigate to='/login' />;
    }

    if (isAuthenticated && (window.location.pathname === '/login' || window.location.pathname === '/register')) {
        return <Navigate to='/home' />;
    }

    return children;

}

export default ProtectedRoute;