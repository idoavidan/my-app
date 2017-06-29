// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
import {root, schema} from './apiController';


// db

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
