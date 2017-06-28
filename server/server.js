// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
var JsonDB = require('node-json-db');
import {buildSchema} from 'graphql';

// db
var db = new JsonDB("myDB", true, false);

var schema = buildSchema(`
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

// The root provides a resolver function for each API endpoint
var root = {
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
const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  pretty : true
}));

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
