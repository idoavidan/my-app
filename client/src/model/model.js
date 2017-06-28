import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});
export const helloPromise = async function(x = Client.query('{hello}')){
    return x;
}

export const initPromise = async function(x = Client.query('{getPics{pics{url,likes,comments,title}}}')){
    return x;
}


// const ido =
