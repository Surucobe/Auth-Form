import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../Hooks/useAuth'

const PrivateRoute = ({ component: Component, ...rest }) =>{
	const { values } = useAuth();

	return(
		<Route 
			{...rest}
			render={({ location }) => {
				values.user ? (
					<Component {...rest} />
					): (
				<Redirect 
					to={{
						pathName='/',
						state: { from: location }
						}}
				/>
					)
				}
			}
		/>
		)
}

export default PrivateRoute;