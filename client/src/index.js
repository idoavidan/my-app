import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
let title = "wow";

const form = <App title={title}/>

ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
