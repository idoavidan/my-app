import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {helloPromise,initPromise} from './model/model';

let title = "wow";
initPromise().then(x => {
  const form = <App title={title} initValue={x.getPics.pics}/>
  ReactDOM.render(form, document.getElementById('root'));
});





// registerServiceWorker();
