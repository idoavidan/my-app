import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});


// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080/ws');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server', event.data);
});

//downstream

// setInterval(function, 5000)
//
// export const checkForNewComments =
//      async (x) => {setInterval(function, milliseconds)console.log(x);}
