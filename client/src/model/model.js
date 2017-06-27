import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
      transport: new Transport('/graphql')
});
const disp = (res => console.log(res.hello));

let dataPromise = Client.query('{hello}').then(res => res.hello);
// .then(res => console.log(res));

export const getAll = function(){
  return dataPromise.then(hello => hello.concat([]));
}

// export {client as default}
