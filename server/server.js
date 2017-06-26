import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
import mongoose from 'mongoose';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty : true
}));

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
