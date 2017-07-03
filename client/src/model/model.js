import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});
export const socket = new WebSocket('ws://localhost:8080/ws');

socket.addEventListener('open', function (event) {
    sendWS({hi : 'Hello Server!'});
});

// export const likeUpdate = socket.addEventListener('message', function(event){console.log(event.data)});


export const initPromise =
    async () => Client.query('{getPics{pics{url,likes,comments,title}}}');

export const addComment =
    async (index,comment) => Client.mutate("{addComment(picIndex:" +index+
                                        ', commentString : "'+comment+'")}'
                                      ).then(sendWS({comment : {index,comment}}));

export const addLike =
    async (index) => Client.mutate("{addLike(picIndex:" +index+ ")}"
  ).then(sendWS({type: "LIKE",like : {index}}));

const sendWS = x => socket.send(JSON.stringify(x));
const conlog = x => console.log(x);
