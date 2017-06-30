import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});


//downstream

//downstream
export const checkForNewComments =
     async (x) => console.log(x);
