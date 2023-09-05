import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import { log } from 'console';

const PrivateRoute: React.FC<any> = ({ children }) => {
    const { user } = useContext(AppContext)
    return user ? children : <Navigate to='/log-in' />


};

export default PrivateRoute;