import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {initPromise, addComment, addLike, socket} from './model/model';
// import {checkForNewComments} from "./model/eventListner";
let title = "wow";
let commentModel = {addComment,socket};
let likeModel = {addLike,socket};

const form = <App title={title}
              initPromise={initPromise}
              commentModel={commentModel}
              likeModel={likeModel}
              socket={socket}/>

ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
