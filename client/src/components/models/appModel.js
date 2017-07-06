import {graphqlClient} from './serverConnections';

export const initPromise =
    async () => graphqlClient.query('{getPics{pics{url,likes,comments,title}}}');
