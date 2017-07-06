import {graphqlClient, socketClient} from './serverConnections';

export const addPic =
    async (url,title) =>
    graphqlClient.mutate('{addPic(url:"' +url+'", title : "'+title+'")}'
            ).then(sendWS({type: "PIC", Pic : {url,title}}));

const sendWS = x => socketClient.send(JSON.stringify(x));
