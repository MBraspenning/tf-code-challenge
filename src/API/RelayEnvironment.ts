// your-app-name/src/RelayEnvironment.js
import {Environment, Network, RecordSource, RequestParameters, Store, Variables} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay = async (params: RequestParameters, variables: Variables) => {
    return fetchGraphQL(params, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
});
