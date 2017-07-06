
const express = require('express');
const graphqlHTTP = require('express-graphql');
const ws = require("ws");
const http = require('http');

import {root, schema} from './apiController';
// import {connection} from './wsController';
const url = require('url');

const app = express();

const server = http.createServer(app);
const wss = new ws.Server({server});

wss.on('connection', function connection(ws, req) {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  ws.on('message', function incoming(data) {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(data);
        }
      });
  });

  ws.on('close', function(){
    console.log("bye");
  });
});

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
