import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Auth from '../Pages/Auth/Auth';
import Register from '../Pages/Register/Register';
import './App.css';

const App = () => (
	<Switch>
		<Route path="/menu" component={Auth} />
		<Route path="/reg" component={Register} />
		<Redirect from="/" to="/menu" />
	</Switch>
);

export default App;
