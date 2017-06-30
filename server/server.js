const express = require('express');
const graphqlHTTP = require('express-graphql');
const ws = require("ws");
const http = require('http');

import {root, schema} from './apiController';
import {connection} from './wsController';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  pretty : true
}));

//ws
// app.use(function (req, res) {
//   res.send({ msg: "hello" });
// });

const server = http.createServer(app);
const wss = new ws.Server({ server });

wss.on('connection', connection);

server.listen(8080, function listening() {
  console.log('Listening on %d', server.address().port);
});
