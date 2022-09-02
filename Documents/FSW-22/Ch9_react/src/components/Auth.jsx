import React from "react";
import { Navigate, useLocation } from 'react-router-dom';

const Auth = ({auth, children}) => {
    let location = useLocation();
    if (!auth) {
        return <Navigate to="/register" state={{ from: location}} replace />
    }
    return children
}

export default Auth