var JsonDB = require('node-json-db');

import {buildSchema} from 'graphql';
import {myEmitter} from './file.js';
const ws = require("ws");

//schema
export const schema = buildSchema(`
  type PicPost {
    url: String
    likes: Int
    comments : [String]
    title : String
  }
  type pics {
    pics : [PicPost]
  }
  type Query {
    getLastPicPost: PicPost
    getPics: pics
  }
  type Mutation {
      addLike(picIndex : Int!) : Int
      addComment(picIndex : Int!, commentString : String!) : Int
      addPic(url : String!, title : String!) : Int
  }
`);

// "db" connection
var db = new JsonDB("myDB", true, false);

// The root provides a resolver function for each API endpoint
const addLike = async function ({picIndex}) {
  // ws.emit("message",psicIndex);
  // console.log(picIndex);
  const oldLikesAmount = db.getData("/testDB/pics[" +picIndex +"]/likes");
  db.push("/testDB/pics[" +picIndex +"]/likes", oldLikesAmount + 1);
  return oldLikesAmount;
};

const addComment = async function({picIndex, commentString}){
  db.push("/testDB/pics[" + picIndex +"]/comments[]", commentString, true);
  return picIndex;
};

const addPic = async function({url, title}){
  let newPic = {url: url, title : title, comments : [], likes : 0}
  // console.log(newPic);
  db.push("/testDB/pics[]", newPic);
  return 1;
};

const getLastPicPost = async () => {
  return db.getData("/testDB/pics")[0];
};

const getPics = async () => {
  const pics = db.getData("/testDB")
  myEmitter.emit('getPics');
  // const rPics = pics.reverse();
  // console.log(pics.pics.reverse());
  // const rpics = {pics : pics.pics.reverse()};
  return pics;
};



export const root = {
  addLike: addLike,
  addComment: addComment,
  getLastPicPost: getLastPicPost,
  getPics: getPics,
  addPic: addPic,
};
