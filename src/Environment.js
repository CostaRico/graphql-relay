import fetch from 'isomorphic-fetch';
import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  return fetch('https://api.graph.cool/relay/v1/cj07pfjjj1nbq0148rutjhxd5', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: operation.text})
  }).then(response => {
    return response.json();
  }).then(data=>{
    debugger;
    return data;
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store
})
