const express = require('express');
const graphqlHTTP = require('express-graphql');
const ws = require("ws");
const http = require('http');

import {root, schema} from './apiController';
import {connection} from './wsController';

const app = express();

const server = http.createServer(app);
const wss = new ws.Server({server});

const masa = wss.on('connection', connection);
// const mn = messageNot(ws);

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
