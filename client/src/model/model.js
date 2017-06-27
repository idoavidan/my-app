import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
      transport: new Transport('http://localhost:8080/graphql')
});

let dataPromise = Client.query('{hello}').then(res => console.log(res));

export const getAll = function(){
  return "dataPromise";
}

// export {client as default}
