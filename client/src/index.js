import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {initPromise, addComment, addLike} from './model/model';

let title = "wow";

const form = <App title={title}
              initPromise={initPromise}
              addComment={addComment}
              addLike={addLike}/>
              
ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
