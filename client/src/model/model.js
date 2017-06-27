import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const Client  = new Lokka({
      transport: new Transport('/graphql')
    });
let dataPromise = Client.query('
{hello}
')
const client = (props, context) => (
      console.log("ido")
);
export {client as default}
