/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AppFilmTitlesQueryVariables = {};
export type AppFilmTitlesQueryResponse = {
    readonly allFilms: {
        readonly films: ReadonlyArray<{
            readonly id: string;
            readonly title: string | null;
        } | null> | null;
    } | null;
};
export type AppFilmTitlesQuery = {
    readonly response: AppFilmTitlesQueryResponse;
    readonly variables: AppFilmTitlesQueryVariables;
};



/*
query AppFilmTitlesQuery {
  allFilms {
    films {
      id
      title
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "FilmsConnection",
    "kind": "LinkedField",
    "name": "allFilms",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "films",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppFilmTitlesQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppFilmTitlesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "09da19676b4dc0865b3be150affac1e2",
    "id": null,
    "metadata": {},
    "name": "AppFilmTitlesQuery",
    "operationKind": "query",
    "text": "query AppFilmTitlesQuery {\n  allFilms {\n    films {\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1835a43b9434e60ccb9de6eb5622bb76';
export default node;
