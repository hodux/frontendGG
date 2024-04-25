import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';
import {useUser} from "../auth/useUser";



function PrivateRoute ()  {
    const user = useUser();
    return (
        user ? <Outlet/> : <Navigate to="/home"/>
    );
}

export default PrivateRoute;