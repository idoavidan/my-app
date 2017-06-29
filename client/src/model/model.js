import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});

export const initPromise =
    async () => Client.query('{getPics{pics{url,likes,comments,title}}}');
