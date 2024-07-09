import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        // Optionally show a loading spinner or some placeholder here
        return <div>Loading...</div>;
    }

    if (error) {
        // Optionally handle the error state here
        return <div>Error: {error.message}</div>;
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
