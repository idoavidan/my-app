import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});

export const initPromise =
    async () => Client.query('{getPics{pics{url,likes,comments,title}}}');

export const addComment =
    async (index,comment) => "hi im not a Promise" + index;

export const addLike =
    async (index) => "hi i will be addLike function" + index;
