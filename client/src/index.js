import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {getAll} from './model/model';

// console.log(getAll());
const form = <App getAll={"getAll"}/>;
// console.log(form.props);

ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
