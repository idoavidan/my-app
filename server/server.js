// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
var JsonDB = require('node-json-db');
import {buildSchema} from 'graphql';

// db
var db = new JsonDB("myDB", true, false);

var schema = buildSchema(`
  type picPost {
    url: String!
    likes: Int!
    comments : [String]!
    title : String
  }
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Init";
  },
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
