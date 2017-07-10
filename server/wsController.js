const ws = require("ws");
const url = require('url');

export const setServerHere = async function(server){
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
}
