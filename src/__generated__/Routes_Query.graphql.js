/**
 * @flow
 * @relayHash 100ced9ca08c8858865d2b938c7fc103
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Routes_QueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query Routes_Query {
  viewer {
    ...Layout_viewer
    id
  }
}

fragment Layout_viewer on Viewer {
  Post(id: "cj8kjyidn2odi0136i8v87a2a") {
    name
    id
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Routes_Query",
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
            "kind": "FragmentSpread",
            "name": "Layout_viewer",
            "args": null
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
  "name": "Routes_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Routes_Query",
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
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
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Routes_Query {\n  viewer {\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  Post(id: \"cj8kjyidn2odi0136i8v87a2a\") {\n    name\n    id\n  }\n}\n"
};

module.exports = batch;
