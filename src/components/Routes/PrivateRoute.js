import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../Hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) =>{
	const { user } = useAuth();

	return(
			<Route 
				{...rest}
				render={(props) => 
					user ? children : <Redirect to='/login' />
				}
			/>
		)
}

 //isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />

export default PrivateRoute;