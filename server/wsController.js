const ws = require("ws");
const url = require('url');

export const setServerHere = async function(server){
  const connection = async (ws, req) => {
    const location = url.parse(req.url, true);
    // You might use location.query.access_token to authenticate or share sessions
    // or req.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
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
    ws.on('message', message);
    ws.on('close', close);
  };
  const wss = new ws.Server({server});
  wss.on('connection', connection);
}
