import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
//
import NotFound from './NotFound'; // 404 page
import routes from './Routes'; // definds urls
// Cappvp components
import Home from './Home';

ReactDOM.render(routes, document.querySelector('#main'));
