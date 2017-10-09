/**
 * @flow
 * @relayHash a00ea6210ea360edc7eb70263d0ad0fe
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Router_QueryResponse = {|
  +viewer: {|
    +Post: ?{|
      +name: ?string;
      +id: string;
    |};
  |};
|};
*/


/*
query Router_Query {
  viewer {
    Post(id: "cj8kjyidn2odi0136i8v87a2a") {
      name
      id
    }
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Router_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "cj8kjyidn2odi0136i8v87a2a",
                "type": "ID"
              }
            ],
            "concreteType": "Post",
            "name": "Post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": "Post{\"id\":\"cj8kjyidn2odi0136i8v87a2a\"}"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Router_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Router_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "id",
                "value": "cj8kjyidn2odi0136i8v87a2a",
                "type": "ID"
              }
            ],
            "concreteType": "Post",
            "name": "Post",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "name",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": "Post{\"id\":\"cj8kjyidn2odi0136i8v87a2a\"}"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Router_Query {\n  viewer {\n    Post(id: \"cj8kjyidn2odi0136i8v87a2a\") {\n      name\n      id\n    }\n    id\n  }\n}\n"
};

module.exports = batch;
