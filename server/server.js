// import schema from './schema';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const ws = require("ws");
import {root, schema} from './apiController';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  pretty : true
}));

//ws
app.use(function (req, res) {
  res.send({ msg: "hello" });
});

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
