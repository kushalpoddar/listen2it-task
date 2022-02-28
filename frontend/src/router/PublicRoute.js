import React from "react";
// import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
//   const { user: currentUser } = useSelector((state) => state.auth);
    let currentUser = false
    // return <Navigate to="/home" />
    return (
        <Component />
    );
};

export default PublicRoute;