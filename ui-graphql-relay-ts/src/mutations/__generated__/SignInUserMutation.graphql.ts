/**
 * @generated SignedSource<<29de5c1b2203cf68b26085706bada333>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type MediaLoginGoogle = {
  credential?: string | null;
};
export type SignInUserMutation$variables = {
  input?: MediaLoginGoogle | null;
};
export type SignInUserMutation$data = {
  readonly signInUserMediaGoogle: string | null;
};
export type SignInUserMutation = {
  response: SignInUserMutation$data;
  variables: SignInUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "signInUserMediaGoogle",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "be907e364873539ec086f70dd4849de2",
    "id": null,
    "metadata": {},
    "name": "SignInUserMutation",
    "operationKind": "mutation",
    "text": "mutation SignInUserMutation(\n  $input: MediaLoginGoogle\n) {\n  signInUserMediaGoogle(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "85d2085213221ca645cc0f392aff2dbf";

export default node;
