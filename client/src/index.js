import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {helloPromise} from './model/model';

let title = "wow";

helloPromise().then(res =>
  {
  const form = <App title={title} initValue={res}/>
  ReactDOM.render(form, document.getElementById('root'));
}
);




// registerServiceWorker();
