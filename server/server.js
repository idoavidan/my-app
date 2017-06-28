// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
var JsonDB = require('node-json-db');
import {buildSchema} from 'graphql';


var schema = buildSchema(`
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

// db
var db = new JsonDB("myDB", true, false);
db.push("/testDB",{pics: [
                      {url :'https://unsplash.it/200/200/?random',
                       likes :11,
                       comments : ["hahaha met"], title : "Banana"},
                      {url :'https://unsplash.it/200/200/?random',
                       likes :2,
                       comments : [], title : "Falafel"},
                      {url :'https://unsplash.it/200/200/?random',
                       likes :3,
                       comments : [], title : "Pizza"},
                      {url :'https://unsplash.it/200/200/?random',
                       likes :2,
                       comments : [],
                       title : "House"},
                      {url :'https://unsplash.it/200/200/?random',
                        likes :2123,
                      comments : [], title : "Food"}
                    ]});


// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
