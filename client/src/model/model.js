import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
    transport: new Transport('/graphql')
});


//downstream

export const initPromise =
    async () => Client.query('{getPics{pics{url,likes,comments,title}}}');

export const addComment =
    async (index,comment) => Client.mutate("{addComment(picIndex:" +index+
                                        ', commentString : "'+comment+'")}'
                                            ).then(x => console.log(x));

export const addLike =
    async (index) => Client.mutate("{addLike(picIndex:" +index+ ")}").then(x => console.log(x));

//downstream
// export const checkForNewComments =
    // async () => Client.query
