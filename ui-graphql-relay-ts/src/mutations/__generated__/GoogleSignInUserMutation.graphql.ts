/**
 * @generated SignedSource<<70218faaa79dd6a5b421f15a82d415a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type signInUserGoogleInput = {
  nationalId?: string | null;
};
export type GoogleSignInUserMutation$variables = {
  input?: signInUserGoogleInput | null;
};
export type GoogleSignInUserMutation$data = {
  readonly signInUserGoogle: string | null;
};
export type GoogleSignInUserMutation = {
  response: GoogleSignInUserMutation$data;
  variables: GoogleSignInUserMutation$variables;
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
    "name": "signInUserGoogle",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "GoogleSignInUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GoogleSignInUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b9c8b19e97d5847aa5649a32bca6f3f5",
    "id": null,
    "metadata": {},
    "name": "GoogleSignInUserMutation",
    "operationKind": "mutation",
    "text": "mutation GoogleSignInUserMutation(\n  $input: signInUserGoogleInput\n) {\n  signInUserGoogle(input: $input)\n}\n"
  }
};
})();

(node as any).hash = "86446feb531d4dac6de15061ee4d11ca";

export default node;
