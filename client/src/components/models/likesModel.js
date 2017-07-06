import {graphqlClient, socketClient} from './serverConnections';

export const addLike =
                async (index) => graphqlClient.mutate("{addLike(picIndex:" +index+ ")}"
              ).then(sendWS({type: "LIKE",like : {index}}));

const sendWS = x => socketClient.send(JSON.stringify(x));
