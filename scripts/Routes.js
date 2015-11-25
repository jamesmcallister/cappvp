/*
This is the Routes file. Edit if you want to change the urls
*/

// Import all the react components from node_modules
import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';
import autobind from 'autobind-decorator';

// Import our own cappvp components
import Home from './Home';
import Store from './Store';
import Servers from './Servers';
import Staff from './Staff';
import Tutorials from './Tutorials';
import NotFound from './NotFound';

var routes = (

	<Router history={createHistory()}>
	    <Route path="/" component={Home}/>
	    <Route path="/servers" component={Servers}/>
	    <Route path="/staff" component={Staff}/>
	  	<Route path="/store" component={Store}/>
	    <Route path="/tutorials" component={Tutorials}/>
	    <Route path="*" component={NotFound}/>
 </Router>

)

ReactDOM.render(routes, document.querySelector('#main'));

export default routes
