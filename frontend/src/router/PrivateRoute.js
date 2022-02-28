import React from "react";
// import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { user: currentUser } = useSelector((state) => state.auth);
    let currentUser = false
    // return <Navigate to="/login" />
    return (
        <Component />
    );
};

export default PrivateRoute;
