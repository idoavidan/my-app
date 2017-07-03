import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {initPromise, addComment, addLike, socket} from './model/model';
// import {checkForNewComments} from "./model/eventListner";
let title = "wow";

const form = <App title={title}
              initPromise={initPromise}
              addComment={addComment}
              addLike={addLike}
              socket={socket}/>

ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
