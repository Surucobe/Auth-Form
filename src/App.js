import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm';
import PrivateRoute from './components/Routes/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

import Layout from './components/Layout/Layout';

const App = () => {
  return(
    <Router>
    	<Layout>
    		<Switch>
    			<PrivateRoute exact path='/'>
    				<Dashboard />
    			</PrivateRoute>
    			<Route path='/'>
    				<LoginForm />
    			</Route>
    			<Route path='/'>
    				<ConfirmForm />
    			</Route>
    			<Route component={NotFound} />
    		</Switch>
    	</Layout>
    </Router>
    )
}

export default App;
