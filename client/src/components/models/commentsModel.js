import {graphqlClient, socketClient} from './serverConnections';

export const addComment =
    async (index,comment) => graphqlClient.mutate("{addComment(picIndex:" +index+
                                        ', commentString : "'+comment+'")}'
            ).then(sendWS({type: "COMMENT", comment : {index,comment}}));

const sendWS = x => socketClient.send(JSON.stringify(x));
