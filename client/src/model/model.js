import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});


export const helloPromise = async function(x = Client.query('{hello}')){
    return x;
}



// const ido =
