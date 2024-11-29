import React from 'react'
import {Navigate} from 'react-router-dom';

const isAuthenticated = true;


const ProtectedRoute = ({element}) => {
    isAuthenticated ? element: <Navigate to="/login" />
        
}

export default ProtectedRoute;