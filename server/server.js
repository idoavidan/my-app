
const express = require('express');
const graphqlHTTP = require('express-graphql');
// const ws = require("ws");
const http = require('http');
import {setServerHere} from './wsController';
import {root, schema} from './apiController';
// import {connection} from './wsController';
const url = require('url');

const app = express();

const server = http.createServer(app);
setServerHere(server);

//todo
function loggingMiddleware(req, res, next) {
  console.log('ip:', req.ip);
  next();
}

app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  pretty : true,
}));

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
