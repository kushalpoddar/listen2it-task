import React from "react";
import Header from "../components/general/header"
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const currentUser = localStorage.getItem("token")
    if(!currentUser) return <Navigate to="/login" />
    
    return (
        <>
            <Header />
            <Component />
        </>
        
    );
};

export default PrivateRoute;
