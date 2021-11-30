/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ResultWeatherQueryVariables = {
    city: string;
};
export type ResultWeatherQueryResponse = {
    readonly getCityByName: {
        readonly name: string | null;
        readonly country: string | null;
        readonly weather: {
            readonly summary: {
                readonly title: string | null;
                readonly description: string | null;
                readonly icon: string | null;
            } | null;
            readonly temperature: {
                readonly actual: number | null;
                readonly feelsLike: number | null;
                readonly min: number | null;
                readonly max: number | null;
            } | null;
        } | null;
    } | null;
};
export type ResultWeatherQuery = {
    readonly response: ResultWeatherQueryResponse;
    readonly variables: ResultWeatherQueryVariables;
};



/*
query ResultWeatherQuery(
  $city: String!
) {
  getCityByName(name: $city, config: {units: metric, lang: nl}) {
    name
    country
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "city"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "config",
    "value": {
      "lang": "nl",
      "units": "metric"
    }
  },
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "city"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "country",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Weather",
  "kind": "LinkedField",
  "name": "weather",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Summary",
      "kind": "LinkedField",
      "name": "summary",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "icon",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Temperature",
      "kind": "LinkedField",
      "name": "temperature",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "actual",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "feelsLike",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "min",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "max",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResultWeatherQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "getCityByName",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResultWeatherQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "kind": "LinkedField",
        "name": "getCityByName",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2ea97c87d3f7a30a60feb6e5235a17bc",
    "id": null,
    "metadata": {},
    "name": "ResultWeatherQuery",
    "operationKind": "query",
    "text": "query ResultWeatherQuery(\n  $city: String!\n) {\n  getCityByName(name: $city, config: {units: metric, lang: nl}) {\n    name\n    country\n    weather {\n      summary {\n        title\n        description\n        icon\n      }\n      temperature {\n        actual\n        feelsLike\n        min\n        max\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b1906a40e5a0a6c39a0ac91a9b8c3444';
export default node;
