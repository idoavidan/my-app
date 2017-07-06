import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

export const graphqlClient = new Lokka({
    transport: new Transport('/graphql')
});
export const socketClient = new WebSocket('ws://localhost:8080/ws');
