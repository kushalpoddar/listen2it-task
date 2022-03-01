import React from "react";
// import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    const currentUser = localStorage.getItem("token")
    if(currentUser) return <Navigate to="/home" />
    return (
        <Component />
    );
};

export default PublicRoute;