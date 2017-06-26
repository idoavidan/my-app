// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
import mongoose from 'mongoose';
import {buildSchema} from 'graphql';

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
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
