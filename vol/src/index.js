import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {initPromise, addComment, addLike,addPic, socket} from './model/model';
// import {checkForNewComments} from "./model/eventListner";
let title = "wow";
let commentModel = {addComment,socket};
let likeModel = {addLike,socket};
let picModel = {addPic, socket};

const form = <App title={title}
              initPromise={initPromise}
              commentModel={commentModel}
              likeModel={likeModel}
              picModel={picModel}/>

ReactDOM.render(form, document.getElementById('root'));
// registerServiceWorker();
