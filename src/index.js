import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();