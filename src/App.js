import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import ConfirmForm from './components/auth/ConfirmForm';

import Layout from './components/Layout/Layout';

const App = () => {
  return(
    <Router>
    	<Switch>
    		<Layout>
    			<Route path='/'>
    				<LoginForm />
    			</Route>
    			<Route path='/'>
    				<ConfirmForm />
    			</Route>
    		</Layout>
    	</Switch>
    </Router>
    )
}

export default App;
