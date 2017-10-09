/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Layout_viewer = {|
  +Post: ?{|
    +name: ?string;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Layout_viewer",
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
        }
      ],
      "storageKey": "Post{\"id\":\"cj8kjyidn2odi0136i8v87a2a\"}"
    }
  ],
  "type": "Viewer"
};

module.exports = fragment;
