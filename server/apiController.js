var JsonDB = require('node-json-db');

import {buildSchema} from 'graphql';

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
    hello: String
    getLastPicPost: PicPost
    getPics: pics
  }
`);

// "db" connection
var db = new JsonDB("myDB", true, false);

// The root provides a resolver function for each API endpoint
export const root = {
  hello: () => {
    return "Init";
  },
  getLastPicPost: () => {
    return db.getData("/testDB").pics[0];
  },
  getPics: () => {
    return db.getData("/testDB");
  }
};

console.log(db.getData("/testDB/pics[0]/url"));
