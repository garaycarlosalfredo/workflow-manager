/**
 * @generated SignedSource<<171c762dfc8ba99994075f165c921c3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SignInUserInput = {
  email?: string | null;
  nationalId?: string | null;
  password?: string | null;
};
export type SignInUserMutation$variables = {
  input?: SignInUserInput | null;
};
export type SignInUserMutation$data = {
  readonly signInUser: string | null;
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
    "name": "signInUser",
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
    "cacheID": "0ac254d1ab93b6b1fe50a253d0fe406e",
    "id": null,
    "metadata": {},
    "name": "SignInUserMutation",
    "operationKind": "mutation",
    "text": "mutation SignInUserMutation(\n  $input: SignInUserInput\n) {\n  signInUser(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "18ab96b7efe4b967ae5fdace97bff063";

export default node;
