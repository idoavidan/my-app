const ws = require("ws");
const url = require('url');

const message = async (data) => {
  const each = (client) => {
    if (client !== ws && client.readyState === ws.OPEN) {
      client.send(data);
    }
  }
  wss.clients.forEach(each);
}

const close = async () => {
  console.log("bye")
}

const connection = async (ws, req) => {
  const location = url.parse(req.url, true);
  // You might use location.query.access_token to authenticate or share sessions
  // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
  // ws.on('message', message);
  ws.on('message', message);
  ws.on('close', close);
};


export const setServerHere = async function(server){
    const wss = new ws.Server({server});
    wss.on('connection', connection);
}
