import {graphqlClient, socketClient} from './serverConnections';
const query1 = (url,title) => '{addPic(url:"' +url+'", title : "'+title+'")}';
//
export const addPic =
    async (url,title) =>
    graphqlClient.mutate(query1(url,title)).then(sendWS({type: "PIC", Pic : {url,title}}));
// export const addPic = async (url,title) => console.log(query1(url,title));
const sendWS = x => socketClient.send(JSON.stringify(x));
