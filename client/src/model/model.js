import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});
const socket = new WebSocket('ws://localhost:8080/ws');

socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});

export const initPromise =
    async () => Client.query('{getPics{pics{url,likes,comments,title}}}');

export const addComment =
    async (index,comment) => Client.mutate("{addComment(picIndex:" +index+
                                        ', commentString : "'+comment+'")}'
                                      ).then(sendWS({index,comment}));

export const addLike =
    async (index) => Client.mutate("{addLike(picIndex:" +index+ ")}"
  ).then(sendWS(index));

const sendWS = x => socket.send(JSON.stringify(x));
const conlog = x => console.log(x);
// export const initPromise =
//         async () => Client.query('{getPics{pics{url,likes,comments,title}}}');
//downstream
// export const checkForNewComments =
    // async () => Client.query
