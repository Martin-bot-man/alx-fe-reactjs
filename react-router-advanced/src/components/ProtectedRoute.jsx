import React from 'react'
import {Navigate} from 'react-router-dom';
import {useAuth} from '../contect/AuthContext';



const ProtectedRoute = ({element}) => {
    const{isAuthenticated} =useAuth();

    isAuthenticated ? element: <Navigate to="/login"  replace />;
        
}

export default ProtectedRoute;