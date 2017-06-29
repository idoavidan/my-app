import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {initPromise} from './model/model';

let title = "wow";

const form = <App title={title} initPromise={initPromise}/>
ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
