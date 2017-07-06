import {graphqlClient, socketClient} from './serverConnections';

const query = (index,comment) =>
    "{addComment(picIndex:" +index+', commentString : "'+comment+'")}';

export const addComment =
    async (index,comment) => graphqlClient.mutate(query(index,comment)
            ).then(sendWS({type: "COMMENT", comment : {index,comment}}));

const sendWS = x => socketClient.send(JSON.stringify(x));
