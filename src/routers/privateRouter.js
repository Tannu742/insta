import React from 'react';
import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/header';
const PrivateRoute = () => {
    const load = useLoaderData();
    const isAuthenticated = load?.access_token || {};
    let userSession = sessionStorage.getItem('userInfo');
    if (userSession) {
        userSession = JSON.parse(userSession);
    }
    return isAuthenticated || userSession?.access_token ? (
    <>
        <Header />
        <Outlet />
    </>
    ) : <Navigate to={'/'} />
}

export default PrivateRoute;
